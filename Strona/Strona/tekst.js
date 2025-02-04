document.addEventListener("DOMContentLoaded", function () {
    const increaseTextButton = document.querySelector('a[href="#increase-text"]');
    const decreaseTextButton = document.querySelector('a[href="#decrease-text"]');
    const resetSettingsButton = document.getElementById("reset-settings-btn");

    
    let currentTextSizeP = 16; 
    let currentTextSizeH2 = 32; 
    let currentTextSizeH3 = 24; 

    const maxIncrement = 3; 
    const incrementSize = 8; 

    
    let incrementCount = 0; 
    let decrementCount = 0; 

    
    function updateTextSize() {
        const paragraphs = document.querySelectorAll(".content-section p, main p");
        const headingsH2 = document.querySelectorAll(".content-section h2, main h2");
        const headingsH3 = document.querySelectorAll(".content-section h3, main h3");

        paragraphs.forEach(el => {
            el.style.fontSize = currentTextSizeP + "px";
        });

        headingsH2.forEach(el => {
            el.style.fontSize = currentTextSizeH2 + "px";
        });

        headingsH3.forEach(el => {
            el.style.fontSize = currentTextSizeH3 + "px";
        });
    }

   
    increaseTextButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (incrementCount < maxIncrement) {
            currentTextSizeP += incrementSize;
            currentTextSizeH2 += incrementSize;
            currentTextSizeH3 += incrementSize;
            incrementCount++;
            decrementCount--; 
            updateTextSize();
        }
    });

    
    decreaseTextButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (incrementCount > 0) {
            currentTextSizeP -= incrementSize;
            currentTextSizeH2 -= incrementSize;
            currentTextSizeH3 -= incrementSize;
            incrementCount--;
            decrementCount++;
            updateTextSize();
        }
    });

    
    resetSettingsButton.addEventListener("click", function (e) {
        e.preventDefault();

        currentTextSizeP = 16; 
        currentTextSizeH2 = 32; 
        currentTextSizeH3 = 24; 

        incrementCount = 0; 
        decrementCount = 0;

        updateTextSize();
    });

    
    updateTextSize();
});
