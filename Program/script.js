const burger = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Optional: animasi burger berubah bentuk (cross)
    burger.classList.toggle("open");    
});