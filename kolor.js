document.addEventListener("DOMContentLoaded", function () {
    const colorMenuButton = document.getElementById("toggle-color-menu");
    const colorOptionsMenu = document.getElementById("color-options-menu");

    const colorRange = document.getElementById("color-range");

    const bgCheckbox = document.getElementById("bg-checkbox");
    const fontCheckbox = document.getElementById("font-checkbox");
    const contentCheckbox = document.getElementById("content-checkbox");

    const applyBgColorButton = document.getElementById("apply-bg-color");
    const restoreBgColorButton = document.getElementById("restore-bg-color");
    const resetSettingsButton = document.getElementById("reset-settings-btn");

    const initialStyles = {
        backgroundColor: window.getComputedStyle(document.body).backgroundColor,
        fontColor: window.getComputedStyle(document.body).color,
        headerFooterColor: window.getComputedStyle(document.querySelector("header")).backgroundColor,
        buttonBackgroundColor: window.getComputedStyle(document.querySelector("button")).backgroundColor,
        buttonBorderColor: window.getComputedStyle(document.querySelector("button")).borderColor,
    };

    const checkboxes = [bgCheckbox, fontCheckbox, contentCheckbox];
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                checkboxes.forEach((cb) => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });

    function getSelectedColor() {
        const hue = colorRange.value;
        return `hsl(${hue}, 100%, 50%)`;
    }

    function updatePreviewColor() {
        const selectedColor = getSelectedColor();

        if (bgCheckbox.checked) {
            document.body.style.backgroundColor = selectedColor;
        } else if (fontCheckbox.checked) {
            const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span");
            textElements.forEach((element) => {
                element.style.color = selectedColor;
            });
        } else if (contentCheckbox.checked) {
            const headerFooter = document.querySelectorAll("header, footer");
            const buttons = document.querySelectorAll("button");

            headerFooter.forEach((element) => {
                element.style.backgroundColor = selectedColor;
            });

            buttons.forEach((button) => {
                button.style.backgroundColor = selectedColor;
                button.style.borderColor = selectedColor;
            });
        }
    }

    applyBgColorButton.addEventListener("click", function () {
        const selectedColor = getSelectedColor();

        if (bgCheckbox.checked) {
            document.body.style.backgroundColor = selectedColor;
        } else if (fontCheckbox.checked) {
            const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span");
            textElements.forEach((element) => {
                element.style.color = selectedColor;
            });
        } else if (contentCheckbox.checked) {
            const headerFooter = document.querySelectorAll("header, footer");
            const buttons = document.querySelectorAll("button");

            headerFooter.forEach((element) => {
                element.style.backgroundColor = selectedColor;
            });

            buttons.forEach((button) => {
                button.style.backgroundColor = selectedColor;
                button.style.borderColor = selectedColor;
            });
        }
    });

    function resetToInitialStyles() {
        document.body.style.backgroundColor = initialStyles.backgroundColor;
        document.body.style.color = initialStyles.fontColor;

        const headerFooter = document.querySelectorAll("header, footer");
        headerFooter.forEach((element) => {
            element.style.backgroundColor = initialStyles.headerFooterColor;
        });

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.style.backgroundColor = initialStyles.buttonBackgroundColor;
            button.style.borderColor = initialStyles.buttonBorderColor;
        });

        const textElements = document.querySelectorAll("body, p, h1, h2, h3, h4, h5, h6, span");
        textElements.forEach((element) => {
            element.style.color = initialStyles.fontColor;
        });

        colorRange.value = 180;
    }

    restoreBgColorButton.addEventListener("click", resetToInitialStyles);
    resetSettingsButton.addEventListener("click", resetToInitialStyles);

    colorRange.addEventListener("input", updatePreviewColor);

    colorMenuButton.addEventListener("click", function () {
        colorOptionsMenu.classList.toggle("active");
    });
});
