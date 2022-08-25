/*১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */

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

console.log(object.address.street?.streetThree);