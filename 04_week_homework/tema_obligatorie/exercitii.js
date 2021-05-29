/* 
1. Display in the console the numbers from 1 to 20
*/
for (var i = 1; i <= 20; i++)
    console.log(i);

/*
2. Display in the console the odd numbers from 1 to 20
*/
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/*
3. Compute the sum of the elements of an array and display it in the console
*/
var list = [1, 34, 5, 3];
var sum = 0;

for (var i = 0; i < list.length; i++)
    sum = sum + list[i];


console.log(sum);


/*
4. Compute the maximum of the elements of an array and display it in the console
*/
var list = [1, 34, 5, 3];
console.log(Math.max(...list));
/*
5. Compute how many times a certain element appears in an array
*/
var list = [1, 34, 1, 5, 3, 1];

function countNr(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}
countNr(list, 1);


/*
6. Using nested control structures (for, while) for generate the following pattern
    0 1 0 1

    1 0 1 0

    0 1 0 1

    1 0 1 0
*/
var sum = 0;
var num = 0;
for (var row = 1; row <= 4; row++) {
    for (var col = 1; col <= 4; col++) {
        sum = row + col;

        if (sum % 2 == 1) {
            num = 0;

        } else {
            num = 1;
        }

        console.log(num);

    }
    console.log("\n");

}