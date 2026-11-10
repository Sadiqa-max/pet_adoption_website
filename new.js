
// PET INFORMATION

const pets = {

    dogs: [
        {
            name: "Buddy",
            breed: "Golden Retriever",
            age: "3 months",
            personality: "Friendly and playful",
            image: "images/dog.jpg"
        },

        {
            name: "Charlie",
            breed: "Beagle",
            age: "5 months",
            personality: "Active and loving",
            image: "images/dog.jpg"
        },

        {
            name: "Max",
            breed: "Mixed Breed",
            age: "4 months",
            personality: "Gentle and cheerful",
            image: "images/dog.jpg"
        }
    ],

    cats: [
        {
            name: "Meovv",
            breed: "Persian",
            age: "2 months",
            personality: "Cute and calm",
            image: "images/cat.jpg"
        },

        {
            name: "Luna",
            breed: "Siamese",
            age: "4 months",
            personality: "Playful and curious",
            image: "images/cat.jpg"
        },

        {
            name: "Milo",
            breed: "Domestic Cat",
            age: "3 months",
            personality: "Friendly and sweet",
            image: "images/cat.jpg"
        }
    ],

    tortoises: [
        {
            name: "Shelly",
            breed: "Greek Tortoise",
            age: "1 year",
            personality: "Quiet and gentle",
            image: "images/tortoise.jpg"
        },

        {
            name: "Rocky",
            breed: "Russian Tortoise",
            age: "2 years",
            personality: "Calm and curious",
            image: "images/tortoise.jpg"
        }
    ],

    rabbits: [
        {
            name: "Pinky",
            breed: "Holland Lop",
            age: "3 months",
            personality: "Fast and playful",
            image: "images/rabbit.jpg"
        },

        {
            name: "Snowball",
            breed: "Angora",
            age: "4 months",
            personality: "Soft and friendly",
            image: "images/rabbit.jpg"
        }
    ]

};


// GET SELECTED CATEGORY FROM URL

const parameters = new URLSearchParams(
    window.location.search
);

const category = parameters.get("category") || "all";


// DISPLAY PETS

const container = document.getElementById("pet-container");

if (container) {

    const title = document.getElementById("category-title");

    const categoryNames = {
        dogs: "Dogs 🐶",
        cats: "Cats 🐱",
        tortoises: "Tortoises 🐢",
        rabbits: "Rabbits 🐰",
        all: "All Available Pets 🐾"
    };

    const selectedPets = category === "all"
        ? Object.values(pets).flat()
        : pets[category];

    if (!selectedPets) {

        title.textContent = "Category Not Found";

        container.innerHTML =
            "<p>Please return to the homepage and select a valid category.</p>";

    } else {

        title.textContent = "Available " + categoryNames[category];

        selectedPets.forEach(function(pet) {

            const card = document.createElement("div");

            card.className = "pet-card";

            card.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">

                <h3>${pet.name}</h3>

                <p>
                    <strong>Breed:</strong> ${pet.breed}<br>
                    <strong>Age:</strong> ${pet.age}<br>
                    <strong>Personality:</strong> ${pet.personality}
                </p>

                <p style="color:green;">
                    <strong>Available</strong>
                </p>

                <button class="adopt-btn">
                    Adopt Me ❤️
                </button>
            `;

            const button = card.querySelector("button");

            button.addEventListener("click", function() {
                openForm(pet.name);
            });

            container.appendChild(card);

        });

    }

}


// OPEN ADOPTION FORM

function openForm(petName) {

    document.getElementById("adoption-form").style.display = "flex";

    document.getElementById("selected-pet").textContent =
        "You are applying to adopt " + petName + "!";

}


// CLOSE ADOPTION FORM

function closeForm() {

    document.getElementById("adoption-form").style.display = "none";

}


// SUBMIT ADOPTION FORM

const adoptForm = document.getElementById("adoptForm");

if (adoptForm) {

    adoptForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for applying! We appreciate your interest in adopting a pet ❤️");

        adoptForm.reset();

        closeForm();

    });

}


// SUBMIT CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting Happy Pet Adoption! ❤️");

        contactForm.reset();

    });

}
