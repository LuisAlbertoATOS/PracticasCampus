const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

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

const observable = new Observable((subscriber) => {
    subscriber.next(users);
}).pipe(
    map((value) => {
        console.log("1...", value);
        return value.data
    }),
    map((value) => {
        console.log("2...", value);
        return value.filter(user => user.status === "active");
    }),
    map((value) => {
        console.log("3...", value);
        return value.reduce((sum, user) => sum + user.age, 0) / value.length;
    }),
    map((value) => {
        console.log("4...", value);
        if (value < 18) throw new Error("Average age is too young");
        else return value;
    })
);

const observer = {
    next: (value) => { 
        console.log("Observer got the value of", value) 
    },
    error: (err) => {
        console.log("There was an error:", err);
    },
    complete: () => {
        console.log("Observer got a complete notification");
    }
}

observable.subscribe(observer);
