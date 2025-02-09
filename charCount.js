//* ____________________________________________________
//* Programming Question : Count Occurrences of character
//* ____________________________________________________

//! TASK:
//? Write a function called countChar that takes two params: a string and a character to count . The function should return the number of times the specified character appears in the string

//todo Contraints : 
//? The function should be case-senstitive.
//? The function should handle both lowercase and uppercase chracters.
//? The chracters parameter can be any printable ASCII character (the function should accept any charater that is part of the ASCII character set and is printable)

//*1 
const countChar = (str,char) => {
  
    let strOpened = str.trim().split("")
    let asciiReg = /^[\x20-\x7E]+$/
    
    if(char.toLowerCase() === char) {
        let calcCharLow = strOpened.filter((elem) => {
            return elem === char
        })
        return calcCharLow.length
    }
    else if(char.toUpperCase() === char){
        let calcCharUp = strOpened.filter((elem) => {
            return elem === char
        })
        return calcCharUp.length
    }
    else if(char === asciiReg){
        let calcCharAscii = strOpened.filter((elem) => {
            return elem === char
        })
        return calcCharAscii.length
    }
}

console.log(countChar("The function2 should Return2 The number2 of Times.","2"));
