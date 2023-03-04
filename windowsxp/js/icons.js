var showButtons = document.querySelectorAll(".icon");
var hideButtons = document.querySelectorAll(".close");
var myDivs = document.querySelectorAll(".window");

var clickCounts = {};

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Keep track of the currently open div
  var openDiv = null;

  // Add touchstart event listeners to the "Show" buttons
  showButtons.forEach(function(button) {
    button.addEventListener("touchstart", function(event) {
      event.preventDefault(); // prevent the default touchstart behavior (e.g. scrolling)

      var target = button.dataset.target;
      var myDiv = document.getElementById(target);

      // Close other myDivs if a new one is opened
      if (myDiv !== openDiv) {
        showButtons.forEach(function(otherButton) {
          var otherTarget = otherButton.dataset.target;
          var otherDiv = document.getElementById(otherTarget);

          if (otherDiv !== myDiv && otherDiv.style.display === "block") {
            otherDiv.style.display = "none";
            otherButton.classList.remove("selected");
          }
        });
      }

      // Set the new div to be the currently open one
      openDiv = myDiv;

      // Show the new div and apply positioning styles
      button.classList.add("selected");
      myDiv.style.display = "block";
      myDiv.style.position = "absolute";
      myDiv.style.top = "25%";
      if (myDiv.id === "archive") {
        myDiv.style.left = "20%";
      } else {
        myDiv.style.left = "35%";
      }
      myDiv.style.zIndex = getMaxZIndex() + 1;
    });
  });

  // Add click event listeners to all link elements
  var linkElements = document.querySelectorAll(".link");
  linkElements.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // prevent the default link click behavior

      var target = link.dataset.target;
      var myDiv = document.getElementById(target);

      // Close all other myDivs and show the clicked one
      showButtons.forEach(function(button) {
        var otherTarget = button.dataset.target;
        var otherDiv = document.getElementById(otherTarget);

        if (otherDiv !== myDiv && otherDiv.style.display === "block") {
          otherDiv.style.display = "none";
          button.classList.remove("selected");
        }
      });

      // Set the new div to be the currently open one
      openDiv = myDiv;

      // Show the new div and apply positioning styles
      myDiv.style.display = "block";
      myDiv.style.position = "absolute";
      myDiv.style.top = "30%";
      myDiv.style.left = "30%";
      myDiv.style.zIndex = getMaxZIndex() + 1;
    });
  });
}



var linkElements = document.querySelectorAll(".link");
linkElements.forEach(function(link) {
  link.addEventListener("click", function() {
    var target = link.dataset.target;
    var myDiv = document.getElementById(target);

    myDiv.style.display = "block";
    myDiv.style.position = "absolute";
    myDiv.style.top = "10%";
    myDiv.style.left = "30%";
    myDiv.style.zIndex = getMaxZIndex() + 1;
  });
});

// Add click event listeners to the "Show" buttons
showButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var target = button.dataset.target;
    var myDiv = document.getElementById(target);

    myDiv.style.zIndex = getMaxZIndex() + 1;

    // Initialize click count for this button if it doesn't exist
    if (!clickCounts[target]) {
      clickCounts[target] = 0;
    }
    // Increase click count and clear previous timeout
    clickCounts[target]++;
    clearTimeout(clickCounts[target + "-timeout"]);

    // If this is the first click, set a timeout to reset the click count
    if (clickCounts[target] === 1) {
      button.classList.add("selected");
      clickCounts[target + "-timeout"] = setTimeout(function() {
        clickCounts[target] = 0;
      }, 300); // Set the timeout to 300ms
    } 
    // If this is the second click, show the div
    else if (clickCounts[target] === 2 && myDiv.style.display !== "block") {

      button.classList.remove("selected");
      myDiv.style.display = "block";
      myDiv.style.position = "absolute";
      myDiv.style.top = "10%";
      myDiv.style.left = "50%";
      // Reset click count after showing the div
      clickCounts[target] = 0;
    }
  });
});

// Add click event listeners to the "Hide" buttons
hideButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var target = button.dataset.target;
    var myDiv = document.getElementById(target);
    myDiv.style.display = "none";
    myDiv.style.zIndex = 1;
  });
});

// Add click event listener to the document object to remove the "selected" class when the user clicks off the button
document.addEventListener("click", function(event) {
  showButtons.forEach(function(button) {
    var target = button.dataset.target;
    if (!button.contains(event.target)) {
      button.classList.remove("selected");
      // Reset click count when the user clicks off the button
      clickCounts[target] = 0;
    }
  });
});

// Helper function to get the highest z-index of all visible "window" elements
function getMaxZIndex() {
  var maxZIndex = 0;
  myDivs.forEach(function(div) {
    if (div.style.display === "block") {
      var zIndex = parseInt(div.style.zIndex);
      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    }
  });
  return maxZIndex;
}