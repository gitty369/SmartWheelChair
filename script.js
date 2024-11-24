function connectToWheelchair() {
    // Redirect to navigation page
    window.location.href = "navigate.html";
  }
  
  function navigateTo(destination) {
    // Disable all buttons temporarily
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
  
    // Update the status message
    const status = document.getElementById("status");
    status.textContent = `Navigating to ${destination}...`;
  
    // Simulate navigation delay and obstacle detection
    setTimeout(() => {
      if (Math.random() > 0.7) { // Simulate a random obstacle
        status.textContent = "Obstacle detected! Please clear the path.";
        document.querySelectorAll("button").forEach(btn => btn.disabled = false);
      } else {
        status.textContent = `${destination} reached successfully.`;
        document.querySelectorAll("button").forEach(btn => btn.disabled = false);
      }
    }, 3000); // Simulated delay
  }
  