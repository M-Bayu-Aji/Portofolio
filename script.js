const navbar = document.querySelector(".nav-container");

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    const windowposition = window.scrollY > 70;
    navbar.classList.toggle("scrolling-active", windowposition  ) 
})

