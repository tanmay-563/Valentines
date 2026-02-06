function goToPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

// Transition
function startGiftTransition(){
popConfetti();
goToPage("pageTransition");

setTimeout(()=>{
goToPage("page2");
},5000);
}

// Card
function yesToCard(){
popConfetti();
goToPage("page3");
}

// No button run (Page 1)
const noBtn1=document.getElementById("noBtn1");

noBtn1.addEventListener("mouseenter",()=>{
const x=Math.random()*(window.innerWidth-120);
const y=Math.random()*(window.innerHeight-60);
noBtn1.style.position="absolute";
noBtn1.style.left=x+"px";
noBtn1.style.top=y+"px";
});

// No button run (Puppy page)
const noBtn2=document.getElementById("noBtn2");

if(noBtn2){
noBtn2.addEventListener("mouseenter",()=>{
const x=Math.random()*(window.innerWidth-120);
const y=Math.random()*(window.innerHeight-60);
noBtn2.style.position="absolute";
noBtn2.style.left=x+"px";
noBtn2.style.top=y+"px";
});
}

// Hearts
const hearts=document.querySelector(".hearts");
const emojis=["💗","💖","💘","💕","💞","❤️","✨"];

function createHeart(){
const h=document.createElement("span");
h.innerText=emojis[Math.floor(Math.random()*emojis.length)];
h.style.left=Math.random()*100+"vw";
hearts.appendChild(h);
setTimeout(()=>h.remove(),6000);
}
setInterval(createHeart,300);

// Confetti
function popConfetti(){
for(let i=0;i<60;i++){
const c=document.createElement("div");
c.className="confetti";
c.style.left=Math.random()*100+"vw";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}

// Music
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
