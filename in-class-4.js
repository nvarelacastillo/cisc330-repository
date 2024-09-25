console.log("in-class-4.js loaded!");

const num= [1, 2, 3, 4, 5];

for (let i=0;i<num.length; i++) {
    if (!(i % 2 === 0)) {
        console.log(`${i+1} is odd`)
    }
    else {
        console.log(`${i+1} is even`)
    }
}