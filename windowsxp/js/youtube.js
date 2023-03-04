// Create a new MutationObserver instance
var observer = new MutationObserver(function(mutations) {
    // Loop through each mutation
    mutations.forEach(function(mutation) {
      // Check if the display style property has changed
      if (mutation.type === "attributes" && mutation.attributeName === "style") {
        
        // Get the video player iframe inside the window   
        var videoPlayer = mutation.target.querySelector("iframe");

        // Check if the window is now hidden
        if (mutation.target.style.display === "none") {
          // Reset the video to the beginning
          videoPlayer.contentWindow.postMessage('{"event":"command","func":"seekTo","args":[0,true]}', '*');
          // Pause the video
          videoPlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      }
    });
  });
  
   // Select the warm-love and video-diary windows
   var warmLoveWindow = document.getElementById("warm-love");
   var videoDiaryWindow = document.getElementById("video-diary");
   
   // Observe changes in the style attribute of the windows
   observer.observe(warmLoveWindow, { attributes: true });
   observer.observe(videoDiaryWindow, { attributes: true });