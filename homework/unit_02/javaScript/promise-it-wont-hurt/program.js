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
var promise = new Promise(function (fulfill, reject) {
      setTimeout(function() {
            fulfill()
        }, 300);
      setTimeout(function() {
            reject()
        }, 300); 
});

promise
    .then((data)=>{
        console.log('FULFILLED!');
    })
    .catch((err)=>{
        console.log('REJECTED!');
    });

// =================
// LEVEL 3
// =================

// =================
// LEVEL 4
// =================

// =================
// LEVEL 5
// =================

// =================
// LEVEL 6
// =================

// =================
// LEVEL 7
// =================