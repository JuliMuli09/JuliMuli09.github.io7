let si=0;
let x;
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var slides=document.getElementsByName("slide");
var sl=Array.from(slides);
var dt=document.getElementsByName("dot");
var dots=Array.from(dt);
var im_n=document.getElementById("im_next");
var im_p=document.getElementById("im_prev");

function showSlides(n,side=NaN){
  console.log(sl);
    if(side=="left"){
      x = sl.shift();
      sl.push(x);
    }
    if(side=="right"){
      x = sl.pop();
      sl.unshift(x);
    }
    for(let i = 0; i != sl.length; i ++){
      sl[i].style.order = i;
    }
    for(var i=0;i<sl.length;i++){
      sl[i].style.display="none";
    }
    for (var i = 0; i < dots.length; i++) {
      console.log(dots[i].style.background);
      if (dots[i].style.background=="rgb(158, 200, 219)"){
        dots[i].style.background="#3374c4";
      }
    }
    dots[si].style.background ="#9ec8db";
    console.log(dots[si].style.background);
    if(window.innerWidth>945){
      sl[0].style.display="block";
      sl[1].style.display="block";
      sl[2].style.display="block";
    }
    else{
      sl[1].style.display="block";
    }
}

function plusSlide(){
  if(si>=sl.length-1) si=-1;
  showSlides(si+=1,"left");
}

function minusSlide(){
  if(si<=0) si=sl.length;
  showSlides(si-=1,"right");
}

document.addEventListener("DOMContentLoaded", function(){
  showSlides(si);
});
window.addEventListener("resize",function(){
  showSlides(si);
});
document.addEventListener("click", (e) => {
  if (e.target.classList.value == "dot") {
      currentId = e.target.id;
  }
})
next.addEventListener("click",plusSlide);
prev.addEventListener("click",minusSlide);
