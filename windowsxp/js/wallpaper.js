const wallpapers = [
    "url('art assets - trinh hami/metamorphosis/1.jpg')",
    "url('art assets - trinh hami/metamorphosis/2.jpg')",
    "url('art assets - trinh hami/metamorphosis/3.jpg')",
    "url('art assets - trinh hami/metamorphosis/4.jpg')",
    "url('art assets - trinh hami/metamorphosis/5.jpg')",
    "url('art assets - trinh hami/metamorphosis/6.jpg')",
    "url('art assets - trinh hami/metamorphosis/7.jpg')",
    "url('redstone.png')"
    // add more images as needed
  ];

  const rangeInput = document.getElementById("range26");

  let currentIndex = 1;
  let interval = rangeInput.value * 250; // convert seconds to milliseconds
  document.body.style.backgroundImage = wallpapers[currentIndex];
  
  rangeInput.addEventListener("input", () => {
    interval = rangeInput.value * 250;
    console.log(interval);
  
    // clear the existing interval and create a new one with the updated interval value
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      currentIndex = (currentIndex + 1) % wallpapers.length;
      document.body.style.backgroundImage = wallpapers[currentIndex];
    }, interval);
  });
  
  // set the initial interval
  let intervalID = setInterval(() => {
    currentIndex = (currentIndex + 1) % wallpapers.length;
    document.body.style.backgroundImage = wallpapers[currentIndex];
  }, interval);
  