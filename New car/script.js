var slideIndex = 1;
var autoSlideInterval;
var isManual = false; // Flag to check if the user is manually changing slides

showSlides(slideIndex);
startAutoSlide(); // Start the automatic slide show

// Function to change slides manually
function plusSlides(n) {
    isManual = true; // Set flag to true when manually changing
    clearInterval(autoSlideInterval); // Stop automatic sliding
    showSlides(slideIndex += n);
    resetAutoSlide(); // Restart automatic sliding after a delay
}

function currentSlide(n) {
    isManual = true; // Set flag to true when manually changing
    clearInterval(autoSlideInterval); // Stop automatic sliding
    showSlides(slideIndex = n);
    resetAutoSlide(); // Restart automatic sliding after a delay
}

// Function to show slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Reset slideIndex if out of bounds
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function for automatic slide change
function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        if (!isManual) { // Only change slide if not in manual mode
            showSlides(slideIndex += 1);
        }
    }, 2000);
}

// Function to reset automatic sliding
function resetAutoSlide() {
    setTimeout(() => {
        isManual = false; // Allow automatic sliding again
        startAutoSlide(); // Restart the automatic slide show
    }, 0); // Adjust this delay as needed
}
