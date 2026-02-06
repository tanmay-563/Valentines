// PAGE SWITCH
function goToPage(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// TRANSITION
function startGiftTransition(){
  popConfetti();
  goToPage("pageTransition");

  setTimeout(()=>{
    goToPage("page2");
  },5000);
}

// CARD
function yesToCard(){
  popConfetti();
  goToPage("page3");
}

// NO BUTTON RUN
const noBtn=document.getElementById("noBtn1");

noBtn.addEventListener("mouseenter",()=>{
  const x=Math.random()*(window.innerWidth-120);
  const y=Math.random()*(window.innerHeight-60);
  noBtn.style.position="absolute";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
});

// HEARTS
const hearts=document.querySelector(".hearts");
const emojis=["💗","💖","💘","💕","💞","❤️","✨"];

function createHeart(){
  const h=document.createElement("span");
  h.innerText=emojis[Math.floor(Math.random()*emojis.length)];
  h.style.left=Math.random()*100+"vw";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(createHeart,150);

// CONFETTI
function popConfetti(){
  for(let i=0;i<60;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}

// MUSIC
const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");
let playing=false;

btn.onclick=async()=>{
  if(!playing){
    await music.play();
    btn.innerText="🔇 Pause Music";
  }else{
    music.pause();
    btn.innerText="🔊 Play Music";
  }
  playing=!playing;
};
