// open the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mainContent").style.marginLeft = "270px";
    document.getElementById("hamburger").textContent="×";
    document.getElementById("hamburger").onclick = closeNav;
}

// close the sidebar
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("mainContent").style.marginLeft = "20px";
    document.getElementById("hamburger").textContent="☰";
    document.getElementById("hamburger").onclick = openNav;
}

var buttonHoverSound = new Audio("Button Pressed.wav");
var buttonUnhoverSound = new Audio("Button Unpressed.wav");

const hamburgerbtn = document.getElementById("hamburger");

hamburgerbtn.addEventListener(
  "mouseover",
  (event) => {
    buttonHoverSound.play();
  }
)

hamburgerbtn.addEventListener(
  "mouseleave",
  (event) => {
    buttonUnhoverSound.play();
  }
)
