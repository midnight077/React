let person = {
    name:'Steve',
    country:'Los Angeles',
    job:'Avenger'
}

// let {name,job,country} = person;
// console.log(name,country,job);

// aliasing (changing the name of variable )
// assigning default values
// let {name , country , job:jobs , xyz = "pro" ,a} = person;
// console.log(name,country,jobs , xyz,a);


// Nested destructuring
const user={
    id:229,
    name:'midnight',
    age:22,
    education:{
        degree:'Masters',
        school:{
            name:'Nsit',
            location:'delhi'
        }
    }
}

// let {name} = user;
// console.log(name);

// let {education:e} = user
// console.log(e); 

let {education:{school:{name:n}}} = user;
console.log(n);