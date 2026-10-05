function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    alert(
      "Thank you! Your appointment request has been received. Our team will contact you shortly."
    );

    this.reset();
  });
