$(document).ready(function() {
// Make all windows draggable
$(".window").draggable({
    start: function() {
      // Get the highest z-index value of all windows
      var maxZIndex = 0;
      $(".window").each(function() {
        var zIndex = parseInt($(this).css("z-index"));
        if (zIndex > maxZIndex) {
          maxZIndex = zIndex;
        }
      });
  
      // Set the dragged window's z-index to the highest value
      $(this).css("z-index", maxZIndex + 1);
    }
  });
  
  // When a window is clicked, bring it to the front
  $(".window").click(function() {
    // Get the highest z-index value of all windows
    var maxZIndex = 0;
    $(".window").each(function() {
      var zIndex = parseInt($(this).css("z-index"));
      if (zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });
  
    // Set the clicked window's z-index to the highest value
    $(this).css("z-index", maxZIndex + 1);
  });
  
  
  });