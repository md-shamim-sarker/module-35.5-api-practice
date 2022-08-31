/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

const lady = {
    name: 'Snigdha Sarker',
    look: {
        color: 'yellow',
        hair: 'long',
        height: 'mediam'
    },
    subject: ['bangla', 'english', 'math'],
    details: function() {
        return `The name of the lady is ${this.name}.
Her skin color is ${this.look.color}.
She reads in ${this.subject[0]}, ${this.subject[1]} and ${this.subject[2]}.`;
    }
};

console.log(lady.details());