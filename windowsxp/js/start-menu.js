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
    startMenu.removeClass('active-menu');
    startButton.removeClass('selected');
  });
  
  startButton.click(function(event) {
    if (startMenu.hasClass('active-menu')) {
      startMenu.removeClass('active-menu');
      startButton.removeClass('selected');
    } else {
      startMenu.addClass('active-menu');
      startButton.addClass('selected');
    }
    event.stopPropagation();
  });
  
  $(document).click(function(event) { 
    if(startMenu.hasClass('active-menu') && !$(event.target).closest(startMenu).length && event.target !== startButton[0]) {
      startMenu.removeClass('active-menu');
      startButton.removeClass('selected');
    }        
  });
});
