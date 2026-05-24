const text = "Happy Birthday Akka 🎂💖";
let index = 0;

function typeWriter(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeWriter,100);

}

}

typeWriter();

function showWish(){

confetti({
particleCount:200,
spread:120
});

alert("Love you forever Akka 💖");

}

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration =
Math.random() * 3 + 3 + "s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);
