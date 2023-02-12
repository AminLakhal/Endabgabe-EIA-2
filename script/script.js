var Endabgabe_EIA2;
(function (Endabgabe_EIA2) {
    // Explosionsradius Multiplier Slider
    Endabgabe_EIA2.sliderRadius = document.getElementById("radiusRange");
    Endabgabe_EIA2.outputRadius = document.getElementById("radiusValue");
    // Anzahl der Parikel Slider
    Endabgabe_EIA2.sliderParticle = document.getElementById("particleRange");
    Endabgabe_EIA2.outputParticle = document.getElementById("particleValue");
    // Lebensdauer der Partikel Slider
    Endabgabe_EIA2.sliderLifespan = document.getElementById("lifespanRange");
    Endabgabe_EIA2.outputLifespan = document.getElementById("lifespanValue");
    // Größe der Parikel Slider
    Endabgabe_EIA2.particleSizeSlider = document.getElementById("particleSize");
    Endabgabe_EIA2.particleSizeValue = document.getElementById("particlesizeValue");
    function menu() {
        //Größe der Explosion 
        Endabgabe_EIA2.radiusMultiplier = Endabgabe_EIA2.sliderRadius.max / 2;
        Endabgabe_EIA2.outputRadius.innerHTML = JSON.parse(Endabgabe_EIA2.sliderRadius.max / 2); // Display the default slider value
        // Update the current slider value (each time you drag the slider handle)
        Endabgabe_EIA2.sliderRadius.oninput = function () {
            Endabgabe_EIA2.outputRadius.innerHTML = Endabgabe_EIA2.sliderRadius.value;
            Endabgabe_EIA2.radiusMultiplier = JSON.parse(Endabgabe_EIA2.sliderRadius.value);
        };
        // Anzahl der Partikel -> Main click Funktion
        Endabgabe_EIA2.outputParticle.innerHTML = Endabgabe_EIA2.sliderParticle.max / 2; // Display the default slider value
        Endabgabe_EIA2.particleAmount = JSON.parse(Endabgabe_EIA2.sliderParticle.max / 2);
        // Update the current slider value (each time you drag the slider handle)
        Endabgabe_EIA2.sliderParticle.oninput = function () {
            Endabgabe_EIA2.outputParticle.innerHTML = Endabgabe_EIA2.sliderParticle.value;
            Endabgabe_EIA2.particleAmount = JSON.parse(Endabgabe_EIA2.sliderParticle.value);
        };
        // Lebensdauer der Partikel 
        Endabgabe_EIA2.outputLifespan.innerHTML = Endabgabe_EIA2.sliderLifespan.max / 2 / 100; // Display the default slider value
        Endabgabe_EIA2.lifespanNumber = JSON.parse(Endabgabe_EIA2.sliderLifespan.value) / 100;
        // Update the current slider value (each time you drag the slider handle)
        Endabgabe_EIA2.sliderLifespan.oninput = function () {
            Endabgabe_EIA2.outputLifespan.innerHTML = Endabgabe_EIA2.sliderLifespan.value / 100;
            Endabgabe_EIA2.lifespanNumber = JSON.parse(Endabgabe_EIA2.sliderLifespan.value) / 100;
        };
        // Größe der Partikel 
        Endabgabe_EIA2.particleSizeValue.innerHTML = Endabgabe_EIA2.particleSizeSlider.max / 2; // Display the default slider value
        Endabgabe_EIA2.particleSize = JSON.parse(Endabgabe_EIA2.particleSizeSlider.max / 2);
        // Update the current slider value (each time you drag the slider handle)
        Endabgabe_EIA2.particleSizeSlider.oninput = function () {
            Endabgabe_EIA2.particleSizeValue.innerHTML = Endabgabe_EIA2.particleSizeSlider.value;
            Endabgabe_EIA2.particleSize = JSON.parse(Endabgabe_EIA2.particleSizeSlider.value);
        };
        // Farbwerte 
        let colorValue = document.getElementById("colorpicker");
        let colorValueName = document.getElementById("colorValue");
        Endabgabe_EIA2.color = colorValue.value;
        colorValue.oninput = function () {
            colorValueName.innerHTML = colorValue.value;
            Endabgabe_EIA2.color = colorValue.value;
        };
    }
    Endabgabe_EIA2.menu = menu;
})(Endabgabe_EIA2 || (Endabgabe_EIA2 = {}));
//# sourceMappingURL=script.js.map