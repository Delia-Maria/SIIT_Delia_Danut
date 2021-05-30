/*
1.
https://edabit.com/challenge/4gzDuDkompAqujpRi
Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
function addUp(num) {
    return (num * (num + 1)) / 2;
}

/*
2.
https://edabit.com/challenge/Q3n42rEWanZSTmsJm
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
/*
3.
https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
Create a function that takes a string and returns a string in which each character is repeated once.
*/
function doubleChar(str) {
    return str.Split('').map(letter => letter.repeat(2)).join('')
}

/*
4.
https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
*/
function set(arr) {
    var finalArr = [];
    var current = arr[0];
    finalArr.push(current);

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== current) {
            current = arr[i];
            finalArr.push(current);
        }
    }
    return finalArr;
}

/*
5.
https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"user1, user2 and 3 more online"

*/
function chatroomStatus(users) {
    switch (users.length) {
        case 0:
            return "no one online"
        case 1:
            return users[0] + ' online'
        case 2:
            return users[0] + ' and ' + users[1] + ' online'
        default:
            return users[0] + ', ' + users[1] + ' and ' + (users.length - 2) + ' more online'
    }
}