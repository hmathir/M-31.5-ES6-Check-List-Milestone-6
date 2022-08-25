/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

var objArray = [
    {item: 'Samsu Note 33',price: 4200},
    {item: 'Jaomi Kopa 007',price: 4500},
    {item: 'Malta 14 Pro Max',price: 5000}
]

const findExact = objArray.find(obj => obj.price === 5000);
console.log(findExact);