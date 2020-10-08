const headerContainer = document.querySelector(".header-container");
const header = document.querySelector("header");

const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

const mobileSearchIcon = document.querySelector(".mobile-header .search-icon");
const searchBoxMobile = document.querySelector(".searchbox-mobile");

const timesIcon = document.querySelector(".search-icon .fa-times");
const searchIcon = document.querySelector(".search-icon .fa-search");

const searchIconDesktop = document.querySelector(
  ".social .search-icon-desktop"
);
const searchBoxDesktop = document.querySelector(".searchbox-desktop");

// Scroll

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    header.classList.add("scrolled");
    headerContainer.classList.add("fixed");
  } else {
    header.classList.remove("scrolled");
    headerContainer.classList.remove("fixed");
  }
});

// Desktop Search

searchIconDesktop.addEventListener("click", function () {
  searchBoxDesktop.classList.toggle("active");
});

// Mobile Menu

menuIcon.addEventListener("click", function () {
  mobileMenuItems.classList.toggle("active");
});

// Mobile Search

mobileSearchIcon.addEventListener("click", function () {
  searchBoxMobile.classList.toggle("active");

  if (searchBoxMobile.classList.contains("active")) {
    searchIcon.style.display = "none";
    timesIcon.style.display = "block";
  } else {
    searchIcon.style.display = "block";
    timesIcon.style.display = "none";
  }
});
window.onload = set_cookies();
function set_cookies() {
  var on = localStorage.getItem("toggled");
  if (on === "true") {
    document.body.classList.toggle("dark-mode");
  }
}
function DarkMode() {
  var element = document.body;
  localStorage.setItem("toggled", element.classList.toggle("dark-mode"));
}

document.getElementById("Search").onsubmit = function () {
  window.location =
    "http://www.google.com/search?q=site:explosion-scratch.github.io " +
    document.getElementById("Text_Search").value;
  return false;
};
document.getElementById("Mobile_Search").onsubmit = function () {
  window.location =
    "http://www.google.com/search?q=site:explosion-scratch.github.io " +
    document.getElementById("Mobile_Text_Search").value;
  return false;
};

function menu(x) {
  x.classList.toggle("menu");
}
$(document).ready(function () {
  $(".page-content a").attr("target", "_blank");
  $(".page-content h1, h2").append("<hr>");
  $("blockquote").html("<i>" + $("blockquote").html() + "</i>");
});

//Include html
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
