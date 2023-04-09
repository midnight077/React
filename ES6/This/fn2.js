// function fn(){
//     console.log(this.person);
//     console.log(this);
//     function abc(){
//         console.log(this.person);
//         console.log(this);
//     }
//     abc();
// }

// let obj = {
//     person:'midnight',
//     func:fn
// }

// obj.func();

// to change the value of this inside abc to obj we have 2 methods

// 1. Bind
// the bind method returns another function whose this se set equal to the argument that is paased to bind.

// function fn(){
//     // console.log(this.person);
//     // console.log(this);
//     function abc(){
//         console.log(this.person);
//         console.log(this);
//     }
//     // this of ret fn is binded to argument
//     let ret = abc.bind(this);
//     // ret();
//     // abc();
//     return ret;
// }

// let obj = {
//     person:'midnight',
//     func:fn
// }

// let returnValue = obj.func();
// // let returnValue = fn();
// returnValue();


// 2. Arrow fn
// the this of arrow function is equal to the this of their immediate parent function/ lexically superior this

function fn()
{
    // console.log(this.person);
    // console.log(this);
    let abc = ()=>{
        console.log(this);
        console.log(this.person);
    }
    abc();
}

let obj = {
    person:'Tushar',
    func:fn
}

// obj.func();
let ret = obj.func;
ret();