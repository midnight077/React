// class a {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.hobby = "football";
//     }
//     sayHi() {
//         console.log('Hello');
//         // console.log(this.name);
//         console.log(this);
//     }
//     sayBye() {
//         console.log('Bye');
//     }
// }
// let obj = new a("midnight",11);
// // console.log(obj);
// // obj.sayHi();
// // let ret = obj.sayHi;
// // ret(); // this of a function inside a class is 'undefined' by default

// let btn = document.querySelector("button");
// btn.addEventListener("click", obj.sayHi); // O/P => <button> click <button>

// 1. using Bind

// class a {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.hobby = "football";
//         this.sayHi = this.sayHi.bind(this);
//     }
//     sayHi() {
//         console.log('Hello');
//         // console.log(this.name);
//         console.log(this);
//     }
//     sayBye() {
//         console.log('Bye');
//     }
// }

// let obj = new a("midnight", 11);

// let btn = document.querySelector("button");
// btn.addEventListener("click", obj.sayHi); // O/P => obj

// 2. arrow function 

class a {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.hobby = "football";
    }
    sayHi=()=> {
        console.log('Hello');
        // console.log(this.name);
        console.log(this);
    }
    sayBye() {
        console.log('Bye');
    }
}

let obj = new a("midnight", 11);

let btn = document.querySelector("button");
btn.addEventListener("click", obj.sayHi); // O/P => obj