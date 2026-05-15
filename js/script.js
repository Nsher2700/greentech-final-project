const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const productSearch = document.getElementById("productSearch");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

if (productSearch) {
  productSearch.addEventListener("input", () => {
    const searchTerm = productSearch.value.toLowerCase();
    let matches = 0;

    productCards.forEach((card) => {
      const productInfo = card.dataset.name.toLowerCase();
      const isMatch = productInfo.includes(searchTerm);
      card.style.display = isMatch ? "block" : "none";
      if (isMatch) matches++;
    });

    if (noResults) {
      noResults.classList.toggle("hidden", matches > 0);
    }
  });
}

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactMessage.textContent = "Thank you. Your message has been received.";
    contactForm.reset();
  });
}

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterMessage.textContent = "Thanks for signing up for the GreenTech newsletter.";
    newsletterForm.reset();
  });
}
