// PAGE SWITCHING
function goToPage(pageNum) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page${pageNum}`).classList.add("active");
}

// YES Button Action (confetti + move page)
function yesAction(pageNum) {
  popConfetti();
  goToPage(pageNum);
}

// No Button Escape effect (PAGE 1)
const noBtn1 = document.getElementById("noBtn1");

noBtn1.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn1.style.position = "absolute";
  noBtn1.style.left = `${x}px`;
  noBtn1.style.top = `${y}px`;
});

// Floating hearts generator
// Floating hearts generator (MORE + VARIETY)
const heartsContainer = document.querySelector(".hearts");

const heartEmojis = ["💗", "💖", "💘", "💞", "💕", "❤️", "💝", "✨", "😍"];

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.opacity = Math.random() * 0.4 + 0.6;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

// 🔥 Increase density (more hearts)
setInterval(createHeart, 120);


setInterval(createHeart, 300);

// 🎉 SIMPLE CONFETTI
function popConfetti() {
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement("div");
    conf.classList.add("confetti");

    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.transform = `rotate(${Math.random() * 360}deg)`;
    conf.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(conf);

    setTimeout(() => {
      conf.remove();
    }, 3000);
  }
}



// Confetti CSS via JS (no extra file needed)
const confettiStyle = document.createElement("style");
confettiStyle.innerHTML = `
  .confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background: white;
    opacity: 0.9;
    z-index: 9999;
    animation: confFall linear forwards;
  }

  @keyframes confFall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(confettiStyle);

// 🎵 BACKGROUND MUSIC
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// Try autoplay (may fail due to browser policy)
window.addEventListener("load", async () => {
  try {
    await music.play();
    isPlaying = true;
    musicBtn.innerText = "🔇 Pause Music";
  } catch {
    // Autoplay blocked, user must press button
    musicBtn.innerText = "🔊 Play Music";
  }
});

// Toggle play/pause
musicBtn.addEventListener("click", async () => {
  if (!isPlaying) {
    await music.play();
    isPlaying = true;
    musicBtn.innerText = "🔇 Pause Music";
  } else {
    music.pause();
    isPlaying = false;
    musicBtn.innerText = "🔊 Play Music";
  }
});
