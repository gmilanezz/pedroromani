

// Carrossel "Meus aprendizados"
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
