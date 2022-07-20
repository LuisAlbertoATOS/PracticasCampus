// module.exports = {
//     getOne: function(){
//         return new Promise((resolve, reject) => {
//             fetch('http://api.icndb.com/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data.value.joke);
//                 resolve(data.value.joke);
//             });
//         })
//     }
// }

export const jokes = {
    getOne: function(){
        return new Promise((resolve, reject) => {
            fetch('http://api.icndb.com/jokes/random')
            .then(res => res.json())
            .then(data => {
                // console.log(data.value.joke);
                resolve(data.value.joke);
            });
        })
    }
}