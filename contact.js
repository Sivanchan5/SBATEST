
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = document.querySelector("#contact-email").value;
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address");
        return;
      }
      alert(`Thank you for choosing to adopt a dog!`);
    });
  } else {
    console.error("#contact-form not found.");
  }
