"use strict";

// function wait(num){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (num) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, num);
//     });
// }

//using ES6
// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res, num);
//     });
// };

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// 1. create function that accepts a Github username and returns a promise that resolves with date of last commit that user made

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})


function gitHubCommit(userId) {
    fetch(`https://api.github.com/users/${userId}/events/public`, {headers: {'Authorization': `token ${gitHubToken}`}})
        .then(response => response.json())
        .then(data => console.log(`${userId} last commit was on ${data[0].created_at}`));

}
gitHubCommit('GuillermoDeLeon');