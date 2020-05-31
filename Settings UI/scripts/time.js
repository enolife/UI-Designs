
var loadTime = function () {
    var time = new Date();
    displayTime.textContent = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  };
  
  // Render the time on load
  loadTime();
  
  // Update the time every second
  setInterval(loadTime, 1000);
  