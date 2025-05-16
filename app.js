document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("splash-video");
  
  // Function to handle navigation
  const navigateToMainPage = () => {
    // Instead of showing/hiding elements, navigate to a new page
    window.location.href = "tableOfContents/TOC/TOC.html"; // Change this to your target page URL
  };

  // Video ended event
  video.addEventListener("ended", navigateToMainPage);
  
  // Click event on video
  video.addEventListener("click", navigateToMainPage);
  
  // Optional: Add keyboard event for accessibility
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      navigateToMainPage();
    }
  });
});