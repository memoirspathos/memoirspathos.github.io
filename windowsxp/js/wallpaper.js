const wallpapers = [
    "url('art assets - trinh hami/metamorphosis/1.jpg')",
    "url('art assets - trinh hami/metamorphosis/2.jpg')",
    "url('art assets - trinh hami/metamorphosis/3.jpg')",
    "url('art assets - trinh hami/metamorphosis/4.jpg')",
    "url('art assets - trinh hami/metamorphosis/5.jpg')",
    "url('art assets - trinh hami/metamorphosis/6.jpg')",
    "url('art assets - trinh hami/metamorphosis/7.jpg')"
    // add more images as needed
  ];

let currentIndex = 1;
    setInterval(() => {
    document.body.style.backgroundImage = wallpapers[currentIndex];
    currentIndex = (currentIndex + 1) % wallpapers.length;
}, 200); // change background every 5 seconds (adjust as needed)