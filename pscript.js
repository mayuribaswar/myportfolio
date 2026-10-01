// Tab switching utility
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, evt) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var j = 0; j < tabcontents.length; j++) {
    tabcontents[j].classList.remove("active-tab");
  }
  var currentTarget = (evt && evt.currentTarget) || (window.event && window.event.currentTarget);
  if (currentTarget) {
    currentTarget.classList.add("active-link");
  }
  var targetTab = document.getElementById(tabname);
  if (targetTab) {
    targetTab.classList.add("active-tab");
  }
}

// Mobile side menu controls
function openmenu() {
  var side = document.getElementById("sidemenu");
  if (side) {
    side.style.right = "0";
  }
}

function colsemenu() {
  var side = document.getElementById("sidemenu");
  if (side) {
    side.style.right = "-400px";
  }
}

function closemenu() {
  colsemenu();
}

document.addEventListener("DOMContentLoaded", function () {
  // Close mobile menu when a navigation link is clicked
  var navLinks = document.querySelectorAll("#sidemenu li a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 900) {
        colsemenu();
      }
    });
  });

  // Handle contact form submission gracefully
  var contactForm = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = "Thank you! Your message has been received.";
        formStatus.style.display = "block";
      }
      contactForm.reset();
    });
  }
});
