// open the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hamburger").textContent="×";
    document.getElementById("hamburger").onclick = closeNav;
}

// close the sidebar
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("hamburger").textContent="☰";
    document.getElementById("hamburger").onclick = openNav;
}