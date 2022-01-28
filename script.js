let navbar = document.querySelector("nav");
let button = document.querySelector("button");

$(".nav-a").css("color","white");
$(".nav-a").hover()


// Get the offset position of the navbar
window.onscroll = () => {
  let pos = document.documentElement.scrollTop;
  if (pos > 100) {
    navbar.classList.add("blue");
    button.classList.add("button-color");

  } else {
    navbar.classList.remove("blue");

  }
};

