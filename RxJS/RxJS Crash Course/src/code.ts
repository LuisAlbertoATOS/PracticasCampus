// import * as Rx from "rxjs/Observable";
import { Observable, subscribeOn, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, from} from "rxjs";
import { fromEvent, merge, map, pluck, interval } from "rxjs";
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/skipUntil';

// // COLD observable because it only works when there's an active subscription
// var observable = new Observable((observer:any) => {
//     try {
//         observer.next('Hey guys');
//         observer.next('How are you?');
//         setInterval(() => {
//             observer.next('I am good');
//         }, 2000)
//         // observer.complete();
//         // observer.next('this will not be send');
//     } catch (err){
//         observer.error(err);
//     }
// })/*.share()*/;

// var observer = observable.subscribe(
//     (x:any) => addItem(x),
//     (error:any) => addItem(error),
//     () => addItem('Completed')
// );

// setTimeout(() => {
//     var observer2 = observable.subscribe(
//         (x:any) => addItem('Subscriber 2: '+x)
//     )
// },1000)

// var observable = fromEvent(document, 'mousemove');

// setTimeout(() => {
//     var subscription = observable.subscribe(
//         (x:any) => addItem(x)
//     )
// }, 2000);

var observable = new Observable((observer:any) => {
    observer.next("Hello...");
})

var observable2 = new Observable((observer:any) => {
    observer.next("there!");
})

from([
    { first: 'Gary', last: 'Simon', age: '34'},
    { first: 'Gary', last: 'Simon', age: '34'},
    { first: 'Gary', last: 'Simon', age: '34'}
])
// .pluck('first')
.subscribe((x:any) => addItem(x));

var observable3 = new Observable((data:any) => {
    var it = 1;
    setInterval(() =>{
        data.next(it++);
    }, 1000)
})

var obs2 = new Subject;
setTimeout (() => {
    obs2.next("Hey")
}, 3000)

// var newObs = observable3.skipUntil(obs2);
newObs.subscribe((x:any) => addItem(x));


var newObs = merge(observable, observable2);
newObs.subscribe((x:any) => addItem(x));

var subject = new AsyncSubject();
subject.subscribe(
    data => addItem('Observer 1: ' + data),
    // err => addItem(err),
    () => addItem('Observer 1 completed')
)

var i=1;
var int = setInterval(() => subject.next(i++), 100);
setTimeout(() => {
    var observer2 =  subject.subscribe(
        data => addItem('Observer 2: ' + data)
    )
    subject.complete();
}, 500);

subject.next('The first thing has been sent');
subject.next('Another thing has been sent');
// subject.next('... obs 2 is abut to sub');

// var observer2 = subject.subscribe(
//     data => addItem('Observer 2: ' + data)
// )

// subject.next('Second thing sent');
// subject.next('Third thing sent');

// observer2.unsubscribe();

// subject.next('Finla thing sent');

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
