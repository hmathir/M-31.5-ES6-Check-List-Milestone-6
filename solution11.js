/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const object = {
    name: 'Athir',
    phone: ['01858906527', '01717434427'],
    address: {
        street: {
            streetOne: 'House 737',
            streetTwo: 'Nitu Nir, Choto Chowrasta'
        },
        city: 'Patuakhali',
        country: 'Bangladesh',
    }
}

console.log(object.phone[1]);