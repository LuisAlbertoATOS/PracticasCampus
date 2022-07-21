/*
    CORE VAR TYPES
    Types only help during development

    number => 1, 5.3, -10
    string => "hello", 'hello', `Hello`
    boolean => true, false
    object => {age: 30}
    array => [1,2,3,'hey',false]
    tuple => [1,2] 
    enum => enum { NEW, OLD }
    any => *
*/

enum Role { ADMIN = 10, READ_ONLY, AUTHOR}
// default enum is 0,1,2..., but now is 10,11,12...

const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string]; // tuple
    roleName:number;
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2,'author'],
    roleName: Role.ADMIN
};

// !!! .push will add elements to defined tuple
person.role[1] = 'admin';
console.log(person.role[1]);

let favoriteActivities:any[]; // any for any type
favoriteActivities = ['Sports', 1];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if (person.roleName === Role.ADMIN){
    console.log('is admin');
}

let randomArray: any[];
randomArray=[1, 'hello', true, [1,2,3], {age:40}];
console.log(randomArray);