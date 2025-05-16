// JavaScript for the scroll functionality
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const gallery = document.querySelector(".image-gallery");

// Get all the images in the gallery
const images = document.querySelectorAll(".image-gallery img video");

// Set the number of pixels to scroll when clicking an arrow
const scrollAmount = window.innerWidth;

// Function to check if the gallery is at the start or end
function updateArrows() {
    // Check if we're at the first image
    if (gallery.scrollLeft === 0) {
        prevBtn.style.display = 'none';  // Hide left arrow
    } else {
        prevBtn.style.display = 'block'; // Show left arrow
    }

    // Check if we're at the last image
    if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
        nextBtn.style.display = 'none';  // Hide right arrow
    } else {
        nextBtn.style.display = 'block'; // Show right arrow
    }
}

// Initial check on page load
updateArrows();

// Add event listeners to the arrows
prevBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: -scrollAmount, // Scroll left
        behavior: "smooth",
    });

    // Update arrows after scroll
    updateArrows();
});

nextBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: scrollAmount, // Scroll right
        behavior: "smooth",
    });

    // Update arrows after scroll
    updateArrows();
});

// Add an event listener to the gallery to update the arrows when scrolling
gallery.addEventListener("scroll", updateArrows);
