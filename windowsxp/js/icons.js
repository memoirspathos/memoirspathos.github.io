var showButtons = document.querySelectorAll(".icon");
var hideButtons = document.querySelectorAll(".close");
var myDivs = document.querySelectorAll(".window");

var clickCounts = {};

var linkElements = document.querySelectorAll(".link");
linkElements.forEach(function(link) {
  link.addEventListener("click", function() {
    var target = link.dataset.target;
    var myDiv = document.getElementById(target);
    
    var maxZIndex = 0;
    $(".window").each(function() {
      var zIndex = parseInt($(this).css("z-index"));
      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    myDiv.style.display = "block";
    myDiv.style.position = "absolute";
    myDiv.style.top = "10%";
    myDiv.style.left = "50%";
    myDiv.style.zIndex = maxZIndex + 1;
  });
});

// Add click event listeners to the "Show" buttons
showButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var target = button.dataset.target;
    var myDiv = document.getElementById(target);
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
      
      var maxZIndex = 0;
      $(".window").each(function() {
        var zIndex = parseInt($(this).css("z-index"));
        if (zIndex > maxZIndex) {
          maxZIndex = zIndex;
        }
      });

      button.classList.remove("selected");
      myDiv.style.display = "block";
      myDiv.style.position = "absolute";
      myDiv.style.top = "10%";
      myDiv.style.left = "50%";
      myDiv.style.zIndex = maxZIndex + 1;
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

