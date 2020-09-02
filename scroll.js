window.onscroll = function() {myFunction()};

var header = document.getElementById("stickyheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}