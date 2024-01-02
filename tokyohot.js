// const audio = document.getElementById("tokyohot");
// function playAudio() {audio.play();}
// function pauseAudio() {audio.pause();}
    
var btn=document.getElementById("btn");
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
    this.innerText = "yoooooooooooo";
    this.style.color ="red";
})
btn.addEventListener("mouseout", function(){
    this.innerText = "yoooo";
    this.style.color ="blue";
})
