/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */

const array = [4,5,12,4,5,66];
const map = array.map(num => num); //Map create a new array and return that.
console.log(map);

const foreach = array.forEach(num => num); //For Each Can not return Anything.
console.log(foreach);

const filter = array.filter(num => num % 2 === 0); //Filter All element's what maintain the conditions. return an 'ARRAY'
console.log(filter);

const find = array.find(num => num % 2 ===0) //Filter Only First Matching Element. return a 'Value' not an array.
console.log(find);
