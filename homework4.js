// Question 6.
document.getElementById("myName").addEventListener("click", function (e) {
    this.querySelectorAll("li").forEach(li => li.style.color = "blue");
});

// Question 7.
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

const catslist = document.getElementById("catslist");
cats.forEach(function(cuteCats) {
    // Creates a new list item.
    const catsName = document.createElement("li");
    // Makes the list item the cats name.
    catsName.textContent=cuteCats.name;
    // Adds to the list.
    catslist.appendChild(catsName);
});

// Question 8, 9, & 10.
const red = document.getElementById("red");
const value = document.getElementById("value")
const form = document.getElementById("question8");

form.addEventListener("submit", function (e) {
    const user = document.getElementById("inputName").value;
    e.preventDefault();
    value.innerHTML = "";

    // Error or success messages.
    if (user==="") {
        const error = document.createElement("div");
        error.textContent = "Please Provide a Value";
        error.className = "question9";
        value.appendChild(error);
    } else {
        const success = document.createElement("div");
        success.textContent = "Success";
        success.className = "question10";
        value.appendChild(success);
    }
});



