# Javascript Concepts [Bind]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## YouTube Link
call, apply and bind method in JavaScript
https://www.youtube.com/watch?v=75W8UPQ5l7k

## Diff B/W [Call & Apply & Bind]

// Here Arguments Passed Ass Comma Seperated
Call: printFullName.apply(name, 'Kumbakonam', 'TamilNadu');

// Here Arguments Passed Ass Array in Apply
Apply: printFullName.apply(name, ['Kumbakonam', 'TamilNadu']);

// Here Bind return the function which we can execute later
let printMyName = printFullName.bind(name, 'Kumbakonam', 'TamilNadu');
console.log(printMyName);
printMyName();


