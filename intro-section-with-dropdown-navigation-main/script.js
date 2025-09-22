const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();

    const parent = this.parentElement;

    document.querySelectorAll(".dropdown").forEach(drop => {
        if (drop !== parent) drop.classList.remove("active");
    });
    parent.classList.toggle("active");
  });
});

window.addEventListener("click", function(e){
    if(!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(drop => {
            drop.classList.remove("active");
        });
    }
});


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
    
