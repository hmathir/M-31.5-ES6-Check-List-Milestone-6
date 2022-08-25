/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */

const simpleJsObj = {
    name: 'Athir',
    roll: '007',
    three: 'Three'
}
const {roll: roll} = simpleJsObj;
console.log(roll);