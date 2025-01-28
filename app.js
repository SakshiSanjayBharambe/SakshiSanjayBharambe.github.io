document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("splash-video");
  const mainContent = document.getElementById("main-content");

  video.addEventListener("ended", () => {
    video.style.display = "none";
    mainContent.style.display = "flex";
    document.body.style.overflow = "auto"; // Enable scrolling if needed
  });
   video.addEventListener("click", () => {
    const imageContainer = document.getElementById("image-container");
    imageContainer.scrollIntoView({ behavior: "smooth" });
  });
});
