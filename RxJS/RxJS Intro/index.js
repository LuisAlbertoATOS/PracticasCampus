const { Observable } = require("rxjs");
const { map, pluck } = require("rxjs/operators");

const users = {
    data: [
        {
            status: "active",
            age: 14
        },
        {
            status: "active",
            age: 12
        },
        {
            status: "inactive",
            age: 11
        },
        {
            status: "active",
            age: 15
        },
        {
            status: "inactive",
            age: 13
        }
    ]
}

const users2 = {
    data: [
        {
            status: "active",
            age: 22
        },
        {
            status: "active",
            age: 20
        },
        {
            status: "inactive",
            age: 18
        },
        {
            status: "active",
            age: 15
        },
        {
            status: "inactive",
            age: 13
        }
    ]
}


const observable = new Observable((subscriber) => {
    subscriber.next(users);
    // subscriber.next(users2);
    // subscriber.complete();
}).pipe(
    pluck("data"),
    filter((value) => value.length >= 5),
    map((value) => {
        // console.log("2...", value);
        return value.filter(user => user.status === "active");
    }),
    map((value) => {
        // console.log("3...", value);
        return value.reduce((sum, user) => sum + user.age, 0) / value.length;
    }),
    map((value) => {
        // console.log("4...", value);
        if (value < 18) throw new Error("Average age is too young");
        else return value;
    }),
    map((average) => `The average age is ${average}`)
);

const observer = {
    next: (value) => { 
        console.log("Observer got the value of", value) 
    },
    error: (err) => {
        // when we get here, no other pipes will be executed
        console.log("There was an error:", err);
    },
    complete: () => {
        console.log("Observer got a complete notification");
    }
}

observable.subscribe(observer);
