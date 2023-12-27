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


    
    

// sounds.forEach((sound) => {
//     let btn = document.createElement("button");
//     btn.classList.add("btn");
//     btn.innerText = sound;
//     btn.addEventListener("click", () => {
//       stopSounds();
//       document.getElementById(sound).play();
//       //上面的sound不需用字串符號包起來，因為它本身是一個變數，代表audio標籤內的id
//     });
//     document.getElementById("buttons").appendChild(btn);
//   });
      
//   function stopSounds() {
//     sounds.forEach((sound) => {
//       let song = document.getElementById(sound);
//       song.pause();
//       song.currentTime = 0;
//     });
//   }