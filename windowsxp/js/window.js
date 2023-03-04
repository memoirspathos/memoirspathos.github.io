$(function() {
  let windows = $(".window");
  let maxZIndex = 0;

  windows.draggable({
    start: function(event, ui) {
      // Set the dragged window's z-index to the highest value
      $(this).css("z-index", ++maxZIndex);

      // Check if the mouse is within the bounds of the body
      if (event.pageX < $('body').offset().left || 
          event.pageY < $('body').offset().top || 
          event.pageX > $('body').offset().left + $('body').width() || 
          event.pageY > $('body').offset().top + $('body').height()) {
        return false;
      }

      // Calculate the offset between the cursor and the window's top-left corner
      let offset = $(this).offset();
      ui.offset = { left: event.pageX - offset.left, top: event.pageY - offset.top };
    },
    drag: function(event, ui) {
      // Check if the mouse is within the bounds of the body
      if (event.pageX < $('body').offset().left || 
          event.pageY < $('body').offset().top || 
          event.pageX > $('body').offset().left + $('body').width() || 
          event.pageY > $('body').offset().top + $('body').height()) {
        return false;
      }

      // Update the window's position based on the cursor position and the ui.offset
      let parentOffset = $(this).offsetParent().offset();
      $(this).css({
        "position": "absolute",
        "left": event.pageX - parentOffset.left - ui.offset.left + "px",
        "top": event.pageY - parentOffset.top - ui.offset.top + "px"
      });
    }
  });

  windows.click(function() {
    // Set the clicked window's z-index to the highest value
    $(this).css("z-index", ++maxZIndex);
  });
});
