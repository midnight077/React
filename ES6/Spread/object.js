// let state ={
//     name:'Tushar',
//     age:22,
//     country:'India'
// }

// shallow copy
// let copy = state;
// copy.country = 'Spain';
// console.log(copy);
// console.log(state);


// using spread operator
// let copy = {...state};
// copy.country = 'Spain';
// console.log(copy);
// console.log(state);


// Nested Object

let state = {
    name:'midnight',
    address:{
        city:'London',
        country:{
            countryName:'United Kingdom',
            countryCode:'UK'
        }
    }
}

// let copy = {...state} // only the copy of first level keys
// Shallow copy in this context means that for any given object that is spread, the uppermost level
//  of the new variable is an object containing the same property values of the original object, but at a new
//  refrence in the memory.
// Any lower level nested objects however, will keep on  pointing to their original refrences

// copy.address.city = "Delhi";
// console.log(state);
// console.log(copy);


// let copy = {...state , address:{...state.address}};
// copy.address.city = "Delhi";
// copy.address.country.countryName = "India";
// console.log(state);
// console.log(copy);


let copy = {...state,address:{...state.address , country:{...state.address.country}}};
copy.address.city = "Delhi";
copy.address.country.countryName = "India";
console.log(state);
console.log(copy);


// let copy = JSON.parse(JSON.stringify(state));
