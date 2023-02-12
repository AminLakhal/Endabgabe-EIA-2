namespace Endabgabe_EIA2 {

    // Zufalls Zahl zwischen 2 Zahlen
    export function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    // Zufallszahl
    export function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    
}