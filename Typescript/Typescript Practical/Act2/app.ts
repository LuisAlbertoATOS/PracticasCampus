const btn = document.querySelector("button")!;

if(btn){
    btn.addEventListener('click', () => {
        console.log('Click');
    });
}

let userInput: unknown;
let userName: string;

userInput=5;
userInput='hello';

// this is valid with unknown but not with any
if(typeof userInput === 'string'){
    userName = userInput;
}

// never bc it doesn't produce a value ????
function generateError(message:string, code:number):never{
    throw {message:message, errorCode:code};
}

generateError('an error ocurred: ', 500);

// tsc app.ts to compile
// tsc app.ts -w to keep on compiling
// tsc --init and tsc to compile all ts files in folder

