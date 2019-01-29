let navbar = document.getElementById("navbar");
let button = document.getElementById("submitButton");
let sticky = navbar.offsetTop;

let menuIcon = document.getElementById("menu-icon");
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");

menuIcon.addEventListener("click", value => {
  about.innerHTML = `<a href="./index.html">About</a>`;
  about.classList.add("dropdown-menu");
  portfolio.innerHTML = `<a href="./portfolio.html">Portfolio</a>`;
  portfolio.classList.add("dropdown-menu");
  contact.innerHTML = `<a href="./contact.html">Contact</a>`;
  contact.classList.add("dropdown-menu");
  console.log("you clicked");
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
