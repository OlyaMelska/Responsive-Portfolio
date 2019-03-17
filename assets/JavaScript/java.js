AOS.init();

let navbar = document.getElementById("navbar");
let menuIcon = document.getElementById("menu-icon");
let dropdownMenu = document.getElementById("navbar");
let main = document.getElementById("main");
// let sticky = navbar.offsetTop;

menuIcon.addEventListener("click", event => {
  dropdownMenu.classList.toggle("dropdown");
});

$(".links").on("click", event => {
  let activeLink = event.target;
  $(".links").removeClass("active");
  activeLink.classList.add("active");
});
