const text = "Media Professional | Journalist | Scriptwriter | Educator";
const typewriterEl = document.getElementById("typewriter");
let index = 0;
let isDeleting = false;

function typeEffect() {
  let displayText = text.substring(0, index);
  let html = displayText.split('').map(letter => {
    return `<span>${letter}</span>`;
  }).join('') + `<span class="cursor">|</span>`; // Cursor always at the end

  typewriterEl.innerHTML = html;

  if (!isDeleting) {
    index++;
    if (index > text.length) {
      // Trigger pop effect
      typewriterEl.classList.add("pop");

      setTimeout(() => {
        typewriterEl.classList.remove("pop"); // Remove after animation
        isDeleting = true;
      }, 500); // Wait for pop animation to complete
    }
  } else {
    index--;
    if (index < 0) {
      isDeleting = false;
    }
  }

  let speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}


typeEffect();
console.log(window.innerHeight,window.innerHeight);