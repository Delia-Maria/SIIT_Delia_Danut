/*
1.
https://edabit.com/challenge/c23dFfNiKbnguSQtq
You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"
*/
function findNemo(sentence) {
    if (sentence.includes("Nemo ")) {
        return "I found Nemo at " + (sentence.split(" ").indexOf("Nemo") + 1) + "!"
    } else {
        return "I can't find Nemo :("
    }

}
/*
2.
https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
*/
function toArray(obj) {
    var a = [];
    for (var i in obj) {
        a.push([i, obj[i]]);
    }
    return a;
}