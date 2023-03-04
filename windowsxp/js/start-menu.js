$(document).ready(function(){
  var startMenu = $('.start-menu-win');
  var startButton = $('.start-btn');
  var isDragging = false;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  startMenu.mousedown(function(event) {
    isDragging = true;
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;
  });

  $(document).mousemove(function(event) {
    if(isDragging) {
      var currentX = event.clientX - initialX;
      var currentY = event.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      startMenu.css({
        'left': currentX + 'px',
        'top': currentY + 'px'
      });
    }
  });

  $(document).mouseup(function() {
    isDragging = false;
  });

  startButton.click(function(event) {
    if (startMenu.hasClass('active-menu')) {
      startMenu.removeClass('active-menu');
    } else {
      startMenu.addClass('active-menu');
    }
    event.stopPropagation();
  });

  startMenu.click(function(event) {
    event.stopPropagation();
  });

  $(document).click(function(event) {
    var isStartMenu = $(event.target).closest('.start-menu-win').is(startMenu);
    var isStartButton = $(event.target).is(startButton);


    
    if (!isStartMenu && !isStartButton) {
      startMenu.removeClass('active-menu');
    }
  });
});
