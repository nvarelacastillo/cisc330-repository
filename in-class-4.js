console.log("in-class-4.js loaded!");

const num= [1, 2, 3, 4, 5];

for (let i=1;i<num.length+1; i++) {
    if (!(i % 2 === 0)) {
        console.log(`${i} is odd`)
    }
    else {
        console.log(`${i} is even`)
    }
}