let navbar = document.getElementById("navbar");
let button = document.getElementById("submitButton");
let sticky = navbar.offsetTop;

window.onscroll = function() {
  fixedNavbar();
};

function fixedNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

console.log("message");
