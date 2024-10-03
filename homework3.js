// Homework 3: Question 6-10

// Question 6:

const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

const cat = {name:"Pinecone", age:13, type:'Munchkin', cuteness: 9001};

// Creating array
const result = [];

for (let i=0; i < cats.length; i++) {
    if (cats[i].adoptionStatus === 'available') {
        result.push(cats[i].name);
    }
}

const sentence = `The adorable adopted cats are! ${result.join()}`;

console.log (sentence);

// Question 7:

let value = ((Math.random() * 10) > 5) ? "greater than five!" : "less than five!";

console.log (value);

// Question 8:

for (let i=0; i < cats.length; i++) {
    console.log(`${cats[i].name}: ${cats[i].adoptionStatus}`);
}

// Question 9:
const i = 1;
const j = '1';

// true.
if (i==j) {
    console.log(true);
}
else {
    console.log(false);
}

// false.
if (i===j) {
    console.log(false);
}
else {
    console.log(false);
}

// Question 10:

function cute (cat) {
    return cat.name + " is cute!";
}

const newArray = cats.map(cute);

console.log(newArray)