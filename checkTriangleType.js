//* ____________________________________________________
//* Programming Question : checkTraingleType function
//* ____________________________________________________

//! TASK: 
//? write a function called checkTraingleType that takes three params representing the lengths of the sides of the triangle . The function should return a string indicating the type of triangle. "equilateral", "isosceles", or "scalene".

//todo The function should adhere to following rules: 
//? If all three sides are of equal length - "equilateral"
//? If two sides are of equal length - "isosceles"
//? If all three sides are of different length - "scalene"

//*1
const checkTraingleType = (n1,n2,n3) => {
    if(n1===n2 && n1===n3) return "Equilateral"
    if(n1===n2 || n1===n3 || n2 === n3) return "isosceles"

    return "scalene"
}

console.log(checkTraingleType(1,2,3));
console.log(checkTraingleType(2,2,3));
console.log(checkTraingleType(2,2,2));
