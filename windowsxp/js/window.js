$(document).ready(function() {
  // Make all windows draggable
  $(".window").draggable({
    start: function(event, ui) {
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

      // Calculate the offset between the cursor and the window's top-left corner
      var offset = $(this).offset();
      var x = event.pageX - offset.left;
      var y = event.pageY - offset.top;
      ui.offset = { left: x, top: y };
    },
    drag: function(event, ui) {
      // Update the window's position based on the cursor position and the ui.offset
      var offset = $(this).offsetParent().offset();
      var x = event.pageX - offset.left - ui.offset.left;
      var y = event.pageY - offset.top - ui.offset.top;
      $(this).css({
        "position": "absolute",
        "left": x + "px",
        "top": y + "px"
      });
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
