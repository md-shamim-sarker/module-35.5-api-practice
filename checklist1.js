/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট, আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। */

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