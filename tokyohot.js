var tag = true;

var btn1 = document.getElementById("tokyo");
var audio1 = document.getElementById("tokyohot");
btn1.onclick = function () {
    if (tag) {
        audio1.pause();
        tag = false;
    } else {
        audio1.play();
        tag = true;
    }
};
btn1.addEventListener("mouseover", function () {
    this.innerText = "yoooooo";
    this.style.color = "red";
});
btn1.addEventListener("mouseout", function () {
    this.innerText = "hot";
    this.style.color = "blue";
});

// 第二個按鈕
var btn2 = document.getElementById("rick");
var audio2 = document.getElementById("rickroll");
btn2.onclick = function () {
    if (tag) {
        audio2.pause();
        tag = false;
    } else {
        audio2.play();
        tag = true;
    }
};
btn2.addEventListener("mouseover", function () {
    this.innerText = "roool";
    this.style.color = "green";
});
btn2.addEventListener("mouseout", function () {
    this.innerText = "rick roll";
    this.style.color = "darkmagenta";
});

// 第三個按鈕
var btn3 = document.getElementById("no");
var audio3 = document.getElementById("nono");
btn3.onclick = function () {
    if (tag) {
        audio3.pause();
        tag = false;
    } else {
        audio3.play();
        tag = true;
    }
};
btn3.addEventListener("mouseover", function () {
    this.innerText = "no";
    this.style.color = "pink";
});
btn3.addEventListener("mouseout", function () {
    this.innerText = "八尬nono";
    this.style.color = "silver";
});

// 第四個按鈕
var btn4 = document.getElementById("bling");
var audio4 = document.getElementById("blingbang");
btn4.onclick = function () {
    if (tag) {
        audio4.pause();
        tag = false;
    } else {
        audio4.play();
        tag = true;
    }
};
btn4.addEventListener("mouseover", function () {
    this.innerText = "bling";
    this.style.color = "yellow";
});
btn4.addEventListener("mouseout", function () {
    this.innerText = "bang-bang";
    this.style.color = "darkblue";
});

