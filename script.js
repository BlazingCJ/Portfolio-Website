const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

// disable copy paste//
document.addEventListener("copy", function (e) {
  e.preventDefault();
});

document.addEventListener("cut", function (e) {
  e.preventDefault();
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loadingPage");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1500);
});
