/*৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */

function check(a,b){
    const sum = a + 2;
    const sum2 = b + 2;
    const totalSum = sum + sum2;
    const totalRes = totalSum * 2;
    console.log(totalRes);
}
check(6,3);

const twoPara = (x,y) => ((x + 2) + (y + 2)) * 2;
console.log(twoPara(6,3));
