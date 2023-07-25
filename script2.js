const btnclient = document.getElementsByClassName("btn-client");
const slide = document.getElementById("slide");

btnclient[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    btnclient[i].classList.remove("active");
  }
  this.classList.add("active");
};

btnclient[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    btnclient[i].classList.remove("active");
  }
  this.classList.add("active");
};

btnclient[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    btnclient[i].classList.remove("active");
  }
  this.classList.add("active");
};

btnclient[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    btnclient[i].classList.remove("active");
  }
  this.classList.add("active");
};