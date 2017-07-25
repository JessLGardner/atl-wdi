'use strict';

// =================
//  LEVEL 1
// =================
// setTimeout(function(){
//     console.log("TIMED OUT!");
// },300);

// =================
// LEVEL 2
// =================
// var promise = new Promise(function (fulfill, reject) {
//       setTimeout(function() {
//             fulfill()
//         }, 300);
// });

// promise
//     .then((data)=>{
//         console.log('FULFILLED!');
//     });

// =================
// LEVEL 3
// =================

// var promise = new Promise(function (fulfill, reject) {
//     setTimeout(function() {
//             reject(new Error('REJECTED!'));
//         }, 300);
// });
// function onReject(error){
//         console.log(error.message);
//     };
// promise
//     .then(null, onReject);

// =================
// LEVEL 4
// =================

var promise = new Promise(function (fulfill, reject) {
    function fulfill() {
            fulfill()
        }, 300);

    setTimeout(function() {
            reject(new Error('REJECTED!'));
        }, 300);
});
function onReject(error){
        console.log(error.message);
    };
promise
    .then(null, onReject);

// =================
// LEVEL 5
// =================

// =================
// LEVEL 6
// =================

// =================
// LEVEL 7
// =================