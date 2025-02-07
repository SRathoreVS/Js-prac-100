//* ____________________________________________________
//* Programming Question : Longest word in a String
//* ____________________________________________________

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words , return the 1st encountered

//* Contraints : 
//* ____________________________________________________
//? The input string may contain alphabetic characters,digits,space and punctuations
//? The input string is non-empty
//? The input string may contain multiple word separated by spaces.

//* Note :
//* ____________________________________________________
//? If the input string is empty or contains only whitespace,the function should return an false
//? The function should ignore leading and tralling whitespace when determining the longest word


//1
const findLongestWord = (str) => {
  if(str.trim().length === 0) return false

  let strArr = str.split(" ")
//   console.log(strArr);

  strArr = strArr.sort((a,b) => a.length-b.length)
  console.log(strArr)
  return strArr.at(-1)
}

console.log(findLongestWord("The function should ignore leading and tralling whitespace"));

//2 
const findLongestWord2 = (str) => { 
    if(str.trim().length === 0) return false

    let words = str.split(" ").filter(word => word.length > 0);

    if (words.length === 0) return false;

    return words.reduce((longest, curr) => 
        curr.length > longest.length ? curr : longest, words[0]
    );

}
console.log(findLongestWord2("If the input string is empty or contains only whitespace"));