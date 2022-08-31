/* ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */

// sample array
const array = [1, 2, 3, 4, 5];

// map
const arrayMap = array.map(element => element * 2);
console.log(arrayMap);

// forEach
array.forEach(element => {
    console.log(element);
});

// filter
const arrayFilter = array.filter(element => element % 2 === 0);
console.log(arrayFilter);

// find
const findValue = array.find(element => element % 2 === 0);
console.log(findValue);

// reduce
const sum = array.reduce((x, y) => x + y, 0);
console.log(sum);