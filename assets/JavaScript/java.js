let navbar = document.getElementById("navbar");
let button = document.getElementById("submitButton");
let sticky = navbar.offsetTop;
let isClicked = false;

let menuIcon = document.getElementById("menu-icon");
let dropdownMenu = document.getElementById("navbar");
let main = document.getElementById("main");
console.log(main);

menuIcon.addEventListener("click", event => {
  dropdownMenu.classList.toggle("dropdown-menu");
  main.classList.toggle("mainDown");
});

// window.onscroll = function() {
//   fixedNavbar();
// };

// function fixedNavbar() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(".links").on("click", event => {
  let activeLink = event.target;
  if ($(activeLink).hasClass("isClicked")) {
    $(".links").removeClass("active");
    console.log("links ", $(".links"));
    console.log("in has class");
  } else {
    activeLink.classList.add("active");
    activeLink.classList.add("isClicked");
  }
});
