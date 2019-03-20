AOS.init();

let navbar = document.getElementById("navbar");
let menuIcon = document.getElementById("menu-icon");
let dropdownMenu = document.getElementById("navbar");
let main = document.getElementById("main");

menuIcon.addEventListener("click", event => {
  $(".links").on("click", () => {
    dropdownMenu.classList.remove("dropdown");
  });
  dropdownMenu.classList.toggle("dropdown");
});

$(".links").on("click", event => {
  let activeLink = event.target;
  $(".links").removeClass("active");
  activeLink.classList.add("active");
});
