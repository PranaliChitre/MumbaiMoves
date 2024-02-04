document.addEventListener('DOMContentLoaded', function () {

  // Dynamic Greeting Message
  function updateGreeting() {
      const hour = new Date().getHours();
      let greeting;
      if (hour < 12) {
          greeting = "Good Morning!";
      } else if (hour < 18) {
          greeting = "Good Afternoon!";
      } else {
          greeting = "Good Evening!";
      }
      document.getElementById("greeting").innerText = greeting;
  }

  // Simple Image Slider for Hero Image
  const images = ['bus1.jpeg', 'bus2.jpeg']; // Replace with your image paths
  let currentImageIndex = 0;

  function changeHeroImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      document.querySelector('.hero-image').style.backgroundImage = url('${images[currentImageIndex]}');
  }

  setInterval(changeHeroImage, 5000); // Change image every 5 seconds

  updateGreeting();
});