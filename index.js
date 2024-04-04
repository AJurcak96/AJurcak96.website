document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap popover
    var popoverTriggerEl = document.getElementById('popoverBtn');
    var popover = new bootstrap.Popover(popoverTriggerEl);

    // Close popover when clicking outside
    document.addEventListener('click', function (event) {
        var isClickInside = popoverTriggerEl.contains(event.target) || popover._element.contains(event.target);
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
  window.addEventListener('load', function() {
      var audio = document.getElementById('bgMusic');
      audio.play();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const bgMusic = document.getElementById("bgMusic");
    const toggleButton = document.getElementById("toggleMusic");
    const musicIcon = document.getElementById("musicIcon");

    toggleButton.addEventListener("click", function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicIcon.textContent = "🔊"; // Speaker symbol when playing
        } else {
            bgMusic.pause();
            musicIcon.textContent = "🔇"; // Muted speaker symbol when paused
        }
    });
});


// Show the button when scrolling down
window.onscroll = function() {scrollFunction()};

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
