var btn=document.getElementById("tokyo");
var audio=document.getElementById("tokyohot");
var tag = true;
btn.onclick = function(){
    if(tag){
                
        audio.pause();
        tag = false;
    }else{
        audio.play();
        tag = true;
            }
     }    
btn.addEventListener("mouseover", function(){
    this.innerText = "yoooooo";
    this.style.color ="red";
})
btn.addEventListener("mouseout", function(){
    this.innerText = "hot";
    this.style.color ="blue";
})

var btn=document.getElementById("rick");
var audioo=document.getElementById("rickroll");
btn.onclick = function(){
    if(tag){
                
        audioo.pause();
        tag = false;
    }else{
        audioo.play();
        tag = true;
            }
     }    
btn.addEventListener("mouseover", function(){
    this.innerText = "roool";
    this.style.color ="green";
})
btn.addEventListener("mouseout", function(){
    this.innerText = "rick roll";
    this.style.color ="darkmagenta";
})
var btn=document.getElementById("no");
var audiooo=document.getElementById("nono");
btn.onclick = function(){
    if(tag){
                
        audiooo.pause();
        tag = false;
    }else{
        audiooo.play();
        tag = true;
            }
     }    
btn.addEventListener("mouseover", function(){
    this.innerText = "no";
    this.style.color ="pink";
})
btn.addEventListener("mouseout", function(){
    this.innerText = "八尬nono";
    this.style.color ="silver";
})
var btn=document.getElementById("no");
var audiooo=document.getElementById("nono");
btn.onclick = function(){
    if(tag){
                
        audiooo.pause();
        tag = false;
    }else{
        audiooo.play();
        tag = true;
            }
     }    
btn.addEventListener("mouseover", function(){
    this.innerText = "no";
    this.style.color ="pink";
})
btn.addEventListener("mouseout", function(){
    this.innerText = "八尬nono";
    this.style.color ="silver";
})

