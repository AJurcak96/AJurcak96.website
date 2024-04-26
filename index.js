document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap popover
  var popoverTriggerEl = document.getElementById("popoverBtn");
  var popover = new bootstrap.Popover(popoverTriggerEl);

  // Close popover when clicking outside
  document.addEventListener("click", function (event) {
    var isClickInside =
      popoverTriggerEl.contains(event.target) ||
      popover._element.contains(event.target);
    if (!isClickInside) {
      popover.hide();
    }
  });
});

// Get the audio element by its ID
var audio = document.getElementById("bgMusic");

// Set the volume to 10% (0.1)
audio.volume = 0.4;

// Create an audio element
var audio = new Audio();

// Set the audio source
audio.src = "./music/Lynyrd Skynyrd Free Bird.mp3";

// Autoplay the audio
audio.autoplay = true;

// Loop the audio
audio.loop = true;

// Append the audio element to the document body
document.body.appendChild(audio);

// Get the audio element by its ID
var audio = document.getElementById("bgMusic");

// Start playing the background music when the page loads
window.addEventListener("load", function () {
  var audio = document.getElementById("bgMusic");
  audio.play();
});

document.addEventListener("DOMContentLoaded", function () {
  const bgMusic = document.getElementById("bgMusic");
  const toggleButton = document.getElementById("toggleMusic");
  const musicIcon = document.getElementById("musicIcon");

  toggleButton.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  });
});

// Show the button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

// Function to show scroll to the top button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// --- Hamburger Menu --- //

// Select the menu toggle element
const menuToggle = document.querySelector(".menu-toggle");
const headerNavButtons = [...document.querySelectorAll(".navbar")]; // Assuming headerNavButtons are other buttons in the header
const popoverBtn = document.getElementById("popoverBtn"); // Assuming popoverBtn is another button
const toggleMusic = document.getElementById("toggleMusic");
const toggleButton = document.getElementById("toggleMusic");
const volume = document.getElementById("volume");
const volumeOff = document.getElementById("volumeOFF");
let isVolumeOn = false;

toggleButton.addEventListener("click", () => {
  isVolumeOn = !isVolumeOn;
  if (isVolumeOn) {
    volume.style.display = "inline";
    volumeOff.style.display = "none";
  } else {
    volume.style.display = "none";
    volumeOff.style.display = "inline";
  }
});

// Function to handle clicks anywhere else on the document
function handleClickOutside(event) {
  // Check if the clicked element is not the menu toggle, its child, one of the buttons
  if (
    !menuToggle.contains(event.target) &&
    ![...headerNavButtons, popoverBtn, toggleMusic, volume, volumeOFF].includes(
      event.target
    )
  ) {
    // Collapse the menu by removing the 'active' class from the menu toggle
    menuToggle.classList.remove("active");
  }
}

// Function to collapse the menu when the screen is resized
function handleResize() {
  // Check if the menu toggle has the 'active' class
  if (menuToggle.classList.contains("active")) {
    // Collapse the menu by removing the 'active' class from the menu toggle
    menuToggle.classList.remove("active");
  }
}

// Add click event listener to the document body to handle clicks anywhere else on the document
document.body.addEventListener("click", handleClickOutside);

// Add click event listener to the menu toggle to toggle its 'active' class
menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
});

// Add resize event listener to the window object to handle screen resizing
window.addEventListener("resize", handleResize);
