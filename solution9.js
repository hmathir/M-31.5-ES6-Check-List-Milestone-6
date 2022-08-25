/*৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */

const array = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
const [a,b,c,...z] = array;
const three = c;
console.log(three);

