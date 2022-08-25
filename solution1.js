/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

let num = 5;
num = 7; // 
//Expected Output is 7.
console.log(num);


const newNum = 5;
newNum = 4;
//Expected Output Error, 
//Because We Can not store new value on const.
console.log(newNum);
