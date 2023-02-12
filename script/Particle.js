var Endabgabe_EIA2;
(function (Endabgabe_EIA2) {
    class Particle extends Endabgabe_EIA2.Moveable {
        lifetime;
        alpha;
        color;
        constructor(_position, _velocity) {
            super(_position);
            this.position.x = _position.x;
            this.position.y = _position.y;
            this.velocity = _velocity;
            this.alpha = 1;
            this.color = (Endabgabe_EIA2.color);
        }
        draw() {
            //Lifespan -> reduziert Helligkeit des Parikels
            this.alpha -= Endabgabe_EIA2.lifespanNumber;
            if (this.alpha < 0) {
                this.alpha = 0;
            }
            // Form des Partikels
            Endabgabe_EIA2.crc2.save();
            Endabgabe_EIA2.crc2.globalAlpha = this.alpha;
            Endabgabe_EIA2.crc2.beginPath();
            Endabgabe_EIA2.crc2.arc(this.position.x, this.position.y, Endabgabe_EIA2.particleSize, 0, 360);
            Endabgabe_EIA2.crc2.closePath();
            Endabgabe_EIA2.crc2.fillStyle = this.color;
            Endabgabe_EIA2.crc2.fill();
            Endabgabe_EIA2.crc2.restore();
        }
    }
    Endabgabe_EIA2.Particle = Particle;
})(Endabgabe_EIA2 || (Endabgabe_EIA2 = {}));
//# sourceMappingURL=Particle.js.map