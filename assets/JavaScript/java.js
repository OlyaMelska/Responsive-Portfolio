let navbar = document.getElementById("navbar");
let button = document.getElementById("submitButton");
let sticky = navbar.offsetTop;

let menuIcon = document.getElementById("menu-icon");
let dropdownMenu = document.getElementById("navbar");
let main = document.getElementById("main");
console.log(main);

menuIcon.addEventListener("click", event => {
  dropdownMenu.classList.toggle("dropdown-menu");
  main.classList.toggle("mainDown");
});

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
