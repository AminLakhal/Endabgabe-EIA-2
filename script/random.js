var Endabgabe_EIA2;
(function (Endabgabe_EIA2) {
    // Zufalls Zahl zwischen 2 Zahlen
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    Endabgabe_EIA2.getRandomArbitrary = getRandomArbitrary;
    // Zufallszahl
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    Endabgabe_EIA2.getRandomInt = getRandomInt;
})(Endabgabe_EIA2 || (Endabgabe_EIA2 = {}));
//# sourceMappingURL=random.js.map