import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError, throwError, tap } from "rxjs";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})

export class PostsService {

    constructor(private http: HttpClient){}

    createAndStorePost(title:string, content:string){
        const postData: Post = {title:title, content:content};
        this.http.post<{name:string}>(
            'https://http-requests-practice-bfcca-default-rtdb.firebaseio.com/posts.json', 
            postData,{
                observe: 'response'
            }
          ).subscribe(responseData => {
            console.log(responseData.body);
          });
    }

    fetchPosts(){
        return this.http
            .get<{[key:string]:Post}>('https://http-requests-practice-bfcca-default-rtdb.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({"Custom-Hader": "Hello"}),
                params: new HttpParams().set('print', 'pretty')
            })
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                        postsArray.push({ ...responseData[key], id: key });
                        // console.log("here is a key: " + key);
                    }
                    }
                    return postsArray;
                }),
                catchError(errorRes => {
                    return throwError(errorRes);
                })
            );
    }

    deletePosts(){
        return this.http.delete(
            'https://http-requests-practice-bfcca-default-rtdb.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'json',
            }
        ).pipe(
            tap(event => {
                console.log(event);
                if(event.type === HttpEventType.Response){
                    console.log(event.body);
                }
            }
        ));
    }
}