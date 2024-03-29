import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // return next.handle(req.url);
        return next.handle(req).pipe(tap(event => {
            if (event.type === HttpEventType.Response){
                console.log("incoming response...");
                console.log(event.body)
            }
        }))
    }
}