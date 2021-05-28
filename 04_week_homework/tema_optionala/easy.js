/*
1.
https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
Create a function that takes two numbers as arguments and return their sum.
*/
function addition(a, b) {
    return a + b;
}

/*
2.
https://edabit.com/challenge/8q54MKnRrm89pSLmW
Write a function that takes an integer minutes and converts it to seconds.
*/
function convert(minutes) {
    return minutes * 60;
}

/*
3.
https://edabit.com/challenge/NAQhEoxbofPidLxm9
Create a function that takes a number as an argument, increments the number by +1 and returns the result.
*/
function addition(num) {
    return num = num + 1;
}

/*
4.
https://edabit.com/challenge/QaApgtePE6QrCZ64o
Create a function that takes an array containing only numbers and return the first element.
*/
function getFirstValue(arr) {
    return arr[0];
}

/*
5.
https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
*/
function remainder(x, y) {
    return x % y;
}

/*
6.
https://edabit.com/challenge/8Qg78sf5SNDEANKti
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
*/
function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4;
}

/*
7.
https://edabit.com/challenge/iBQYbSHZGhpktLRdn
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
*/
function divisibleByFive(n) {
    if (n % 5)
        return false;
    else
        return true;
}

/*
8.
https://edabit.com/challenge/yHGowWucg3k2kJdZ4
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
*/
function comp(str1, str2) {
    if (str1.length == str2.length)
        return true;
    else
        return false;
}

/*
9.

https://edabit.com/challenge/kLa2w7m4h849k8rmW
Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
*/
function sayHelloBye(name, num) {
    name = name[0].toUpperCase() + name.slice(1);
    if (num == 0)
        return "Bye " + name;
    else if (num == 1)
        return "Hello " + name;
}