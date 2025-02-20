"use strict";
let i = 1;
for (i; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}
let fruit = 'banana';
switch (fruit) {
    case 'apple':
        console.log('apple');
        break;
    case 'banana':
        console.log('banana');
        break;
    case 'orange':
        console.log('orange');
        break;
    default:
        console.log('not found');
        break;
}
