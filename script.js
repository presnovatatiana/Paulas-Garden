// Лёгкая анимация при клике на карточку
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.1)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 300);
  });
});