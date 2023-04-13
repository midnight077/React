// 1. This is a keyword which represents an object
// 2. It takes different values depending upon how it is used 
// 3. By default in Browser THIS is equal to global window object 

// var a = 10; //global var variables are attached to window object
// let b=20;
// console.log(this);


// In function, the value to this is dependent on how the function is called
// value of this is dynamically/ runtime bind to function

// 1. when a function is called by default , the value of this passed to it is equal to window object
// let person = "midnight";
// var person = "midnight";
function fn(){
    console.log("my name is ",this.person);
    console.log(this);
}
// fn();

// 2. when a function is called through an Object, the this value of the function is equal to the object through which it is called
let obj = {
    person : "midnight .",
    func : fn
}

// obj.func();

// 3.
// let fnn = obj.func;
// fnn();

// 4. 
// setTimeout(obj.func , 1000);


// use strict
// when 'use strict' is used inside a function and when that is function is called normally
//  the value of 'this' inside that function will be equal to undefined
function fn(){
    'use strict';
    console.log(this);
    console.log("my name is ",this.person);
}
fn();

// setTimeout(obj.func , 1000); // value of this will be window 
