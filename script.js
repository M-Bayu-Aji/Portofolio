function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.about');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.penghalang2');
});

link3.addEventListener('click', () => {
    scrollToElement('.address');
});

// navbar

const navbar = document.querySelector(".nav-container");

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    const windowposition = window.scrollY > 70;
    navbar.classList.toggle("scrolling-active", windowposition  ) 
})