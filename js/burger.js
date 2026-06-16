const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const links = nav.querySelectorAll(".header__link");
const body = document.body;
const overlay = document.createElement("div");

overlay.className = "header__overlay";
body.appendChild(overlay);

burger.addEventListener("click", toggle);
overlay.addEventListener("click", toggle);

links.forEach((link) => {
  link.addEventListener("click", toggle);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 970) {
    burger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "auto";
    burger.setAttribute("aria-expanded", "false");
  }
});

function toggle() {
  burger.classList.toggle("active");
  overlay.classList.toggle("active");
  nav.classList.toggle("active");
  body.style.overflow = burger.classList.contains("active") ? "hidden" : "auto";
}
