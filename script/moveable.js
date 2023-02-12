var Endabgabe_EIA2;
(function (Endabgabe_EIA2) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            this.position = _position;
            this.velocity = new Endabgabe_EIA2.Vector(0, 0);
        }
        move(_timeslice) {
            // Multiplier auf die Position -> größere Explosion
            this.position.x += Endabgabe_EIA2.getRandomArbitrary(-5 * Endabgabe_EIA2.radiusMultiplier, 5 * Endabgabe_EIA2.radiusMultiplier);
            this.position.y -= Endabgabe_EIA2.getRandomArbitrary(-5 * Endabgabe_EIA2.radiusMultiplier, 5 * Endabgabe_EIA2.radiusMultiplier);
        }
        draw(_color) {
            // console.log("movable move");
        }
    }
    Endabgabe_EIA2.Moveable = Moveable;
})(Endabgabe_EIA2 || (Endabgabe_EIA2 = {}));
//# sourceMappingURL=moveable.js.map