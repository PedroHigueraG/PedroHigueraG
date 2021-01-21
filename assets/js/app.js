function navSlide() {
    
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".list-header");
    const navLinks = document.querySelectorAll(".list-header li");

    menu.addEventListener("click", () => {
        nav.classList.toggle("list-header-active");

        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        menu.classList.toggle("toggle");
    });
  

}

navSlide();