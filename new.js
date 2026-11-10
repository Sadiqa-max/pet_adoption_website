
// Pet Database using your exact directory filenames
const petsData = {
    bella: {
        name: "Bella",
        breed: "Fluffy Puppy",
        age: "3 Months",
        gender: "Female",
        size: "Small",
        vaccinated: "Yes",
        image: "images/an-adorable-fluffy-puppy-with-a-pink-flo.jpg",
        bio: "Bella is a sweet fluffy puppy who loves belly rubs, treats, and following you around!"
    },
    milo: {
        name: "Milo",
        breed: "Gray & White Kitten",
        age: "4 Months",
        gender: "Male",
        size: "Small",
        vaccinated: "Yes",
        image: "images/cute-curious-gray-and-white-kitten-in-a-lo.jpg",
        bio: "Milo is a curious kitten who loves climbing, playing with yarn, and exploring around!"
    },
    oliver: {
        name: "Oliver",
        breed: "Tabby Cat",
        age: "1 Year",
        gender: "Male",
        size: "Medium",
        vaccinated: "Yes",
        image: "images/cat_picture.jfif",
        bio: "Oliver is a calm companion who loves relaxing in sunbeams and purring."
    },
    daisy: {
        name: "Daisy",
        breed: "Golden Retriever",
        age: "2 Years",
        gender: "Female",
        size: "Large",
        vaccinated: "Yes",
        image: "images/fac5a7477927f58c6b03bef9968703fb.jpg",
        bio: "Daisy is gentle, well-trained, and gets along great with children and other pets."
    },
    charlie: {
        name: "Charlie",
        breed: "Mixed Breed Dog",
        age: "1.5 Years",
        gender: "Male",
        size: "Medium",
        vaccinated: "Yes",
        image: "images/ff849d79a2317d32f1c9134472ecf765.jpg",
        bio: "Charlie is an energetic, loving dog ready for outdoor adventures and long walks."
    },
    luna: {
        name: "Luna",
        breed: "Domestic Short Hair",
        age: "6 Months",
        gender: "Female",
        size: "Small",
        vaccinated: "Yes",
        image: "images/images.jpg",
        bio: "Luna is an affectionate kitten who loves cuddling up on the couch."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Check if on detail page
    const petNameHeader = document.getElementById("detailPetName");
    if (petNameHeader) {
        loadPetDetails();
    }

    // Modal elements
    const modal = document.getElementById("adoptionModal");
    const closeModal = document.querySelector(".close-btn");
    const openBtn = document.getElementById("openAdoptModalBtn");
    const adoptForm = document.getElementById("adoptForm");
    const adoptButtons = document.querySelectorAll(".pet-card .adopt-btn");

    // Open homepage card modals
    adoptButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const petName = e.target.parentElement.querySelector("h3").innerText;
            const modalTitle = document.getElementById("modalTitle");
            if (modalTitle) modalTitle.innerText = `Adopt ${petName}`;
            if (modal) modal.style.display = "flex";
        });
    });

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            if (modal) modal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    if (adoptForm) {
        adoptForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Application submitted! Our team will contact you shortly.");
            modal.style.display = "none";
            adoptForm.reset();
        });
    }
});

// Load details dynamically from URL query parameter (e.g. pet-detail.html?pet=bella)
function loadPetDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const petKey = urlParams.get("pet") || "bella";
    const pet = petsData[petKey] || petsData["bella"];

    document.getElementById("detailPetName").innerText = pet.name;
    document.getElementById("detailPetBreed").innerText = `${pet.breed} • ${pet.age}`;
    document.getElementById("detailPetImage").src = pet.image;
    document.getElementById("detailGender").innerText = pet.gender;
    document.getElementById("detailAge").innerText = pet.age;
    document.getElementById("detailSize").innerText = pet.size;
    document.getElementById("detailVaccinated").innerText = pet.vaccinated;
    document.getElementById("detailBio").innerText = pet.bio;
}

// Category filter on main page
function filterCategory(category) {
    const petCards = document.querySelectorAll(".pet-card");
    petCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Action option handlers
function scheduleVisit() {
    alert("Opening visit scheduler calendar...");
}

function fosterPet() {
    alert("Thank you for your interest in fostering! A coordinator will get in touch.");
}

function sponsorPet() {
    alert("Redirecting to shelter donation page...");
}