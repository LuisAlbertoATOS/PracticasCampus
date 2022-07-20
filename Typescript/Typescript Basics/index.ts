import * as _ from 'lodash';

async function hello() {
    return 'world'
}

const url = new URL('...')

let lucky: number; // or let lucky: 5; for example
lucky = 23;
// lucky = '23'; <= this gives error bc of variable types

type Style = 'bold' | 'italic';
let font: Style;
// font = 'Something'; gives error

interface Person {
    first: string;
    last: string;
    [key: string]: any; // optional
}

const person: Person = {
    first: "Jeff",
    last: "Delaney",
    // fast: true <= this would have given error if it wasn't defined in Person
}

// FUNCTIONS
// assure to receive and return a specific type
// void is accepted as return type
function pow(x:number,y:number):number {
    return Math.pow(x,y);
}

pow(5,10);

// ARRAYS
const arr: number[] = []; // force array to receive numbers
arr.push(6);
arr.push(100);
// arr.push('5'); error bc types

// tuple..............use ? for optional
type MyList = [number?, string?, boolean?];

//GENERICS
// T is for variable type
class Observable<T> {
    constructor(public value:T){}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);
