namespace Endabgabe_EIA2 {
// Explosionsradius Multiplier Slider
 export let sliderRadius =<HTMLInputElement> document.getElementById("radiusRange");
 export let outputRadius = document.getElementById("radiusValue");
 export let radiusMultiplier:number;

 // Anzahl der Parikel Slider
 export let sliderParticle =<HTMLInputElement> document.getElementById("particleRange");
 export let outputParticle = document.getElementById("particleValue");
 export let particleAmount:number;

 // Lebensdauer der Partikel Slider
 export let sliderLifespan =<HTMLInputElement> document.getElementById("lifespanRange");
 export let outputLifespan = document.getElementById("lifespanValue");
 export let lifespanNumber:number;
 
 // Größe der Parikel Slider
 export let particleSizeSlider =<HTMLInputElement> document.getElementById("particleSize");
 export let particleSizeValue = document.getElementById("particlesizeValue");
 export let particleSize:number;

  export function menu(): void {

  //Größe der Explosion 
  radiusMultiplier =  sliderRadius.max/2;
  outputRadius.innerHTML = JSON.parse(sliderRadius.max/2); // Display the default slider value
  // Update the current slider value (each time you drag the slider handle)
  sliderRadius.oninput = function () {
    outputRadius.innerHTML = sliderRadius.value;
    radiusMultiplier = JSON.parse(sliderRadius.value);
  }

// Anzahl der Partikel -> Main click Funktion
  outputParticle.innerHTML = sliderParticle.max/2; // Display the default slider value
  particleAmount = JSON.parse(sliderParticle.max/2);
  // Update the current slider value (each time you drag the slider handle)
  sliderParticle.oninput = function () {
    outputParticle.innerHTML = sliderParticle.value;
    particleAmount = JSON.parse(sliderParticle.value);
  }
  

// Lebensdauer der Partikel 
  outputLifespan.innerHTML = sliderLifespan.max/2/100; // Display the default slider value
  lifespanNumber = JSON.parse(sliderLifespan.value)/100;
  // Update the current slider value (each time you drag the slider handle)
  sliderLifespan.oninput = function () {
    outputLifespan.innerHTML = sliderLifespan.value/100;
    lifespanNumber = JSON.parse(sliderLifespan.value)/100;
  }

  // Größe der Partikel 
  particleSizeValue.innerHTML = particleSizeSlider.max/2; // Display the default slider value
  particleSize = JSON.parse(particleSizeSlider.max/2);
  // Update the current slider value (each time you drag the slider handle)
  particleSizeSlider.oninput = function () {
    particleSizeValue.innerHTML = particleSizeSlider.value;
    particleSize = JSON.parse(particleSizeSlider.value);
  }

// Farbwerte 
  let colorValue = <HTMLInputElement>document.getElementById("colorpicker");
  let colorValueName = document.getElementById("colorValue");
  
  color = colorValue.value;
  colorValue.oninput = function () {
    colorValueName.innerHTML = colorValue.value;
    color = colorValue.value;
  }
  

    }
}