document.addEventListener("DOMContentLoaded", function () {
    const cursorIncreaseButton = document.getElementById("cursor-increase-btn");
    const cursorOptionsMenu = document.getElementById("cursor-options-menu");

    const whiteCursorButton = document.getElementById("white-cursor-btn");
    const blackCursorButton = document.getElementById("black-cursor-btn");
    const resetSettingsButton = document.getElementById("reset-settings-btn");


    let isBigWhiteCursor = false;
    let isBigBlackCursor = false;

    
    cursorIncreaseButton.addEventListener("click", function (e) {
        e.preventDefault();
        cursorOptionsMenu.classList.toggle("active");
    });

    
    whiteCursorButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (isBigWhiteCursor) {
            
            document.body.classList.remove("big-cursor");
            isBigWhiteCursor = false;
        } else {
            
            document.body.classList.add("big-cursor");
            document.body.classList.remove("black-cursor"); 
            isBigWhiteCursor = true;
            isBigBlackCursor = false; 
        }
    });

  
    blackCursorButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (isBigBlackCursor) {
           
            document.body.classList.remove("black-cursor");
            isBigBlackCursor = false;
        } else {
            
            document.body.classList.add("black-cursor");
            document.body.classList.remove("big-cursor"); 
            isBigBlackCursor = true;
            isBigWhiteCursor = false; 
        }
    });

   
    resetSettingsButton.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("big-cursor"); 
        document.body.classList.remove("black-cursor"); 
        isBigWhiteCursor = false;
        isBigBlackCursor = false;
    });
});
