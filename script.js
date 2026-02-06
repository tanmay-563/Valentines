/* ---------------- PAGE NAVIGATION ---------------- */

function goToPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* ---------------- TRANSITION ---------------- */

function startGiftTransition() {
  popConfetti();
  goToPage("pageTransition");

  // ⏱️ Change this time if you want longer GIF
  setTimeout(() => {
    goToPage("page2");
  }, 4800);
}

/* ---------------- CARD ---------------- */

function yesToCard() {
  popConfetti();
  goToPage("page3");
}

/* ---------------- NO BUTTON MOVE (MOBILE + DESKTOP) ---------------- */

function moveNoButton(btn) {

  const padding = 20;

  const maxX = window.innerWidth - btn.offsetWidth - padding;
  const maxY = window.innerHeight - btn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

/* Page 1 NO */
const noBtn1 = document.getElementById("noBtn1");

if (noBtn1) {
  noBtn1.addEventListener("mouseenter", () => moveNoButton(noBtn1));
  noBtn1.addEventListener("touchstart", () => moveNoButton(noBtn1));
}

/* Puppy Page NO */
const noBtn2 = document.getElementById("noBtn2");

if (noBtn2) {
  noBtn2.addEventListener("mouseenter", () => moveNoButton(noBtn2));
  noBtn2.addEventListener("touchstart", () => moveNoButton(noBtn2));
}

/* ---------------- FLOATING HEARTS ---------------- */

const heartsContainer = document.querySelector(".hearts");

const heartEmojis = ["💗","💖","💘","💕","💞","❤️","✨","😍"];

function createHeart() {

  const heart = document.createElement("span");

  heart.innerText =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 80);

/* ---------------- CONFETTI ---------------- */

function popConfetti() {

  for (let i = 0; i < 70; i++) {

    const conf = document.createElement("div");
    conf.classList.add("confetti");

    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    conf.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(conf);

    setTimeout(() => {
      conf.remove();
    }, 3000);
  }
}

/* Inject confetti CSS dynamically */
const confettiStyle = document.createElement("style");

confettiStyle.innerHTML = `
.confetti{
  position:fixed;
  width:10px;
  height:10px;
  background:white;
  opacity:.9;
  z-index:9999;
  animation:confFall linear forwards;
}

@keyframes confFall{
  0%{
    transform:translateY(0) rotate(0deg);
    opacity:1;
  }
  100%{
    transform:translateY(100vh) rotate(720deg);
    opacity:0;
  }
}
`;

document.head.appendChild(confettiStyle);

/* ---------------- MUSIC ---------------- */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

/* Autoplay attempt */
window.addEventListener("load", async () => {
  try {
    await music.play();
    isPlaying = true;
    musicBtn.innerText = "🔇 Pause Music";
  } catch {
    musicBtn.innerText = "🔊 Play Music";
  }
});

/* Toggle */
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
