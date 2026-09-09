const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const track = document.getElementById("track");
const cards = [...track.querySelectorAll(".result-card")];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

function visibleCards() {
  return window.innerWidth >= 900 ? 3 : 1;
}

function updateCarousel() {
  const width = cards[0].getBoundingClientRect().width;
  const max = Math.max(0, cards.length - visibleCards());
  index = Math.min(index, max);
  track.style.transform = `translateX(-${index * (width + 14)}px)`;
}

next.addEventListener("click", () => {
  const max = Math.max(0, cards.length - visibleCards());
  index = index >= max ? 0 : index + 1;
  updateCarousel();
});

prev.addEventListener("click", () => {
  const max = Math.max(0, cards.length - visibleCards());
  index = index <= 0 ? max : index - 1;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
document.getElementById("year").textContent = new Date().getFullYear();
updateCarousel();
