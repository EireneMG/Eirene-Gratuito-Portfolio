document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".project-images img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add fade-in class when in view
          entry.target.classList.add("fade-in");
        } else {
          // Remove fade-in class when out of view
          entry.target.classList.remove("fade-in");
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the image is visible
    }
  );

  projectImages.forEach((img) => observer.observe(img));
});

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor click behavior

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "start", // Align to the start of the target element
        });
      }
    });
  });
});

//Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.getElementById("hamburger-nav");

  if (menu.classList.contains("open") && !hamburgerNav.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
