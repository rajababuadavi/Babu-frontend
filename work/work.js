const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  const btn = card.querySelector(".expand-btn");
  btn.addEventListener("click", () => {
    card.classList.toggle("active");
    btn.textContent = card.classList.contains("active") ? "−" : "+";
  });
});
