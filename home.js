const dogs = [
  {
    name: "Buddy",
    age: 0.8,
    breed: "Golden Retriever",
    image: "images/photo.jpg",
  },
  { name: "Bella", age: 4, breed: "Labrador", image: "images/pexel.jpg" },
  { name: "Charlie", age: 1, breed: "Corgi", image: "images/hnoody.jpg" },
  { name: "Max", age: 8, breed: "German Shepherd", image: "images/pexels.jpg" },
];

// Function to filter dogs by category
function classifyDogs(category) {
  if (category === "puppy") {
    return dogs.filter((dog) => dog.age < 1);
  } else if (category === "adult") {
    return dogs.filter((dog) => dog.age >= 1 && dog.age < 7);
  } else if (category === "senior") {
    return dogs.filter((dog) => dog.age >= 7);
  } else {
    return dogs; // Return all dogs if no category is specified
  }
}

// Function to render dog cards
function renderDogs(dogsArray) {
  const gallery = document.querySelector(".dog-gallery");
  gallery.innerHTML = ""; // Clear existing content

  if (dogsArray.length === 0) {
    gallery.innerHTML = "<p>No dogs available in this category.</p>";
    return;
  }

  dogsArray.forEach((dog) => {
    const dogCard = document.createElement("div");
    dogCard.classList.add("dog-card");

    const img = document.createElement("img");
    img.src = dog.image;
    img.alt = `${dog.name} (${dog.breed})`;

    const dogInfo = document.createElement("p");
    dogInfo.textContent = `${dog.name} (${dog.breed}), Age: ${dog.age}`;

    dogCard.appendChild(img);
    dogCard.appendChild(dogInfo);
    gallery.appendChild(dogCard);
  });
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  // Render all dogs initially
  renderDogs(dogs);

  // Add event listeners to filter buttons
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      const filteredDogs = classifyDogs(category);
      renderDogs(filteredDogs);
    });
  });

  // Handle subscription form submission
  const subscribeForm = document.querySelector("#subscribe-form");
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.querySelector("#email").value.trim();
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
      alert("Please enter a valid email address");
      return;
    }

    alert(`Thank you for subscribing with the email: ${emailInput}!`);
    subscribeForm.reset(); // Clear the form after submission
  });
});
