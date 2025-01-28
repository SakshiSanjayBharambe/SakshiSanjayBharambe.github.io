// JavaScript for the scroll functionality
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const gallery = document.querySelector(".image-gallery");

// Set the number of pixels to scroll when clicking an arrow
const scrollAmount = window.innerWidth; // Scroll by one image width

prevBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: -scrollAmount, // Scroll left
        behavior: "smooth",
    });
});

nextBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: scrollAmount, // Scroll right
        behavior: "smooth",
    });
});
