const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  mobileMenu.classList.add("open");
  menuOverlay.classList.add("open");
  document.body.classList.add("menu-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
}

function hideMenu() {
  mobileMenu.classList.remove("open");
  menuOverlay.classList.remove("open");
  document.body.classList.remove("menu-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
closeMenu.addEventListener("click", hideMenu);
menuOverlay.addEventListener("click", hideMenu);

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", hideMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideMenu();
});

document.getElementById("year").textContent = new Date().getFullYear();


const learningViewport = document.getElementById("learningViewport");
const learningPrev = document.getElementById("learningPrev");
const learningNext = document.getElementById("learningNext");

if (learningViewport && learningPrev && learningNext) {
  const scrollLearning = (direction) => {
    const card = learningViewport.querySelector(".learning-card");
    if (!card) return;

    const gap = 14;
    const distance = card.getBoundingClientRect().width + gap;

    learningViewport.scrollBy({
      left: direction * distance,
      behavior: "smooth"
    });
  };

  learningPrev.addEventListener("click", () => scrollLearning(-1));
  learningNext.addEventListener("click", () => scrollLearning(1));
}
// Carrossel de resultados
const resultsViewport = document.getElementById("resultsViewport");
const resultsPrev = document.getElementById("resultsPrev");
const resultsNext = document.getElementById("resultsNext");

if (resultsViewport && resultsPrev && resultsNext) {
  const scrollResults = (direction) => {
    const card = resultsViewport.querySelector(".result-photo");
    const track = resultsViewport.querySelector(".results-track");
    if (!card) return;
    const gap = track ? parseFloat(getComputedStyle(track).gap) || 0 : 0;
    resultsViewport.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth"
    });
  };
  resultsPrev.addEventListener("click", () => scrollResults(-1));
  resultsNext.addEventListener("click", () => scrollResults(1));
}
