let bars = document.getElementById("bars")
let navToggle = document.getElementById("navToggle")

bars.addEventListener("click", function (){
    navToggle.classList.toggle("hidden")
    navToggle.classList.toggle("active")
})

const elements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate-in');
    }
});
}, {
// Options
threshold: 0.5, // When 50% of the element is visible
});

// Observe the elements
elements.forEach((element) => {
observer.observe(element);
});