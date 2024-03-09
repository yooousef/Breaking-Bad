"strict mode";
// burger bar
document.querySelector(".bar").addEventListener("click", function () {
  const links = document.querySelector(".nav");
  links.classList.toggle("hide");
});
document.querySelector("ul i").addEventListener("click", function () {
  const links = document.querySelector(".nav");
  links.classList.toggle("hide");
});
// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
