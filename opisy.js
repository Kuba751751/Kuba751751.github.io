document.addEventListener("DOMContentLoaded", function () {
    const descriptionBox = document.getElementById("image-description-box");

    const toggleDescriptionsButton = document.querySelector('a[href="#toggle-descriptions"]'); // Assuming this is the new button
    let descriptionsEnabled = false;

    const descriptions = {
        "img-pilka-nozna": "Widok z góry trybun na odbywający się na stadionie mecz piłki nożnej, na trybunach wokół boiska siedzi tłum kibiców w klubowych barwach.",
        "img-siatkowka": "Trzech siatkarzy w czarnych strojach wykonuje blok przy siatce, próbując zatrzymać atak zawodnika w białym stroju z numerem 13. W tle widoczni są kibice i banery reklamowe.",
        "img-koszykowka": "Czterech mężczyzn rozgrywających akcję meczu koszykówki. Jeden z nich wykonuje rzut tyłem w stronę wiszącej obręczy kosza. W tle znajdują się trybuny hali zapełnione kibicami.",
        "img-tenis": "Cztery osoby grające w tenisa na trawiastym korcie tenisowym; jedna z nich skacze, by uderzyć piłkę, a reszta czeka w swoich pozycjach.",
        "img-pilka-reczna": "Kobiety rozgrywające akcję meczu piłki ręcznej na hali sportowej, widok ujęty zza bramki. Bramkarka stara się wybronić rzut piłki w światło bramki.",
        "img-golf": "Mężczyzna w trakcie zamachu kijem golfowym na zewnętrznym polu golfowym, w słoneczny dzień, z widocznymi drzewami w tle."
    };

    const images = document.querySelectorAll(".hover-image");

    images.forEach((img) => {
        img.addEventListener("mouseenter", function () {
            if (!descriptionsEnabled) return; 
            const description = descriptions[img.id];
            if (description) {
                descriptionBox.textContent = description;
                descriptionBox.classList.add("visible");

                const imgRect = img.getBoundingClientRect();
                descriptionBox.style.top = `${imgRect.top + window.scrollY}px`;
                descriptionBox.style.left = `${imgRect.right + 20}px`;
            }
        });

        img.addEventListener("mouseleave", function () {
            if (!descriptionsEnabled) return; 
            descriptionBox.classList.remove("visible");
        });
    });

    toggleDescriptionsButton.addEventListener("click", function (e) {
        e.preventDefault();
        descriptionsEnabled = !descriptionsEnabled;

        if (!descriptionsEnabled) {
            descriptionBox.classList.remove("visible");
        }
    });
});
