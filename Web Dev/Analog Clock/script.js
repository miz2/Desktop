function show_clock(){
let h=document.getElementsByClassName('hr')[0];
let m=document.getElementsByClassName('mn')[0];
let s=document.getElementsByClassName('ss')[0];

let date =new Date();
let hours=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

h.style.transform=`rotate(${30*hours+ min/2}deg)`;
m.style.transform=`rotate(${6*min}deg)`;
s.style.transform=`rotate(${6* sec}deg)`;

// let sound=new Audio("tic.mp3");
// sound.play();
}
setInterval(show_clock,1000);