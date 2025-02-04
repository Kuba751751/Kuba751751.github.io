document.addEventListener("DOMContentLoaded", function () {
    const monochromeButton = document.getElementById("monochrome-button");
    const restoreBgColorButton = document.getElementById("restore-bg-color");
    const resetSettingsButton = document.getElementById("reset-settings-btn");

    let isMonochromeActive = false; 
    const initialStyles = {
        backgroundColor: window.getComputedStyle(document.body).backgroundColor,
        fontColor: window.getComputedStyle(document.body).color,
        headerFooterColor: window.getComputedStyle(document.querySelector("header")).backgroundColor,
        buttonBackgroundColor: window.getComputedStyle(document.querySelector("button")).backgroundColor,
        buttonBorderColor: window.getComputedStyle(document.querySelector("button")).borderColor,
        images: [...document.querySelectorAll("img")].map(img => img.src),
    };

    function enableMonochrome() {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";

        const headerFooter = document.querySelectorAll("header, footer");
        headerFooter.forEach(element => {
            element.style.backgroundColor = "#bfbfbf";
            element.style.width = ""; 
        });

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.backgroundColor = "#e0e0e0";
            button.style.borderColor = "#a0a0a0";
        });

        const images = document.querySelectorAll("img");
        images.forEach((img, index) => {
            if (!img.src.includes("osoba.png")) { 
                img.src = img.src.replace(/([^\/]+)(\.\w+)$/, "mono_$1$2");
            }
        });

        isMonochromeActive = true;
    }

   
    function disableMonochrome() {
        document.body.style.backgroundColor = initialStyles.backgroundColor;
        document.body.style.color = initialStyles.fontColor;

        const headerFooter = document.querySelectorAll("header, footer");
        headerFooter.forEach(element => {
            element.style.backgroundColor = initialStyles.headerFooterColor;
            element.style.width = ""; 
        });

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button, index) => {
            button.style.backgroundColor = initialStyles.buttonBackgroundColor;
            button.style.borderColor = initialStyles.buttonBorderColor;
        });

        const images = document.querySelectorAll("img");
        images.forEach((img, index) => {
            img.src = initialStyles.images[index];
        });

        isMonochromeActive = false;
    }

    
    monochromeButton.addEventListener("click", function () {
        if (isMonochromeActive) {
            disableMonochrome();
        } else {
            enableMonochrome();
        }
    });

    
    restoreBgColorButton.addEventListener("click", disableMonochrome);
    resetSettingsButton.addEventListener("click", disableMonochrome);
});
