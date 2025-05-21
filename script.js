// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    mobileMenu.classList.add("hidden");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form submission

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form untuk mengirimkan secara normal

    // Mengambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Membuat pesan yang akan dikirimkan ke WhatsApp
    const whatsappMessage = `
      *Pesan Kontak Website*
      
      *Nama:* ${name}
      *Email:* ${email}
      *Layanan yang Tertarik:* ${service}
      *Pesan:* ${message}
    `;

    // Encoding pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage.trim());

    // Membuat URL WhatsApp
    const whatsappURL = `https://wa.me/6281365036634?text=${encodedMessage}`;

    // Mengarahkan pengguna ke WhatsApp
    window.open(whatsappURL, "_blank");
  });
