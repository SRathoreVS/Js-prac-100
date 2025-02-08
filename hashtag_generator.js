//* ____________________________________________________
//* Programming Question : HashTag Generator
//* ____________________________________________________

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The Hash Tag follows  : 

//? The input str should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces .

//? If the length of the input string is greater than 280 chars or if the input str is empty or contains only whitespace , the function should return false - done

//? Otherwise , the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task : 

//*1
const generateHash = (str) => {
    if(str.trim().length === 0 || str.length > 280) return false

    let hashTag = `#${str.trim().toUpperCase()}`

    return hashTag
    
}

console.log(generateHash("satyam is back"));

//*2
const generateHash2 = (str) => {
    const trimmedStr = str.trim();

    if (trimmedStr.length === 0 || trimmedStr.length > 280) return false; 

    let hashTag = "#" + trimmedStr
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join("");

    return hashTag;
}

console.log(generateHash2("satyam is back")); 