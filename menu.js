document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.getElementById("toggle-menu"); 
    const menu = document.getElementById("accessibility-menu"); 
    const toggleMenu2 = document.getElementById("toggle-menu-2"); 
    const menu2 = document.getElementById("menu_2"); 
    const cursorOptionsMenu = document.getElementById("cursor-options-menu"); 
    const colorOptionsMenu = document.getElementById("color-options-menu"); 

   
    toggleMenu.addEventListener("click", function () {
        const isMenuActive = menu.classList.toggle("active"); 

        if (!isMenuActive) {
            
            if (menu2) menu2.classList.remove("active");
            if (cursorOptionsMenu) cursorOptionsMenu.classList.remove("active");
            if (colorOptionsMenu) colorOptionsMenu.classList.remove("active");
        }
    });

    
    if (toggleMenu2 && menu2) {
        toggleMenu2.addEventListener("click", function () {
            menu2.classList.toggle("active");
        });
    }

    
    document.body.addEventListener("click", function (e) {
        const target = e.target;

       
        if (
            !target.closest("#toggle-menu") &&
            !target.closest("#accessibility-menu") &&
            !target.closest("#cursor-options-menu") &&
            !target.closest("#color-options-menu")
        ) {
            
            menu.classList.remove("active");
            if (menu2) menu2.classList.remove("active");
            if (cursorOptionsMenu) cursorOptionsMenu.classList.remove("active");
            if (colorOptionsMenu) colorOptionsMenu.classList.remove("active");
        }
    });
});
