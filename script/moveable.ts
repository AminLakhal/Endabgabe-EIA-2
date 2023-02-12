namespace Endabgabe_EIA2 {

    export class Moveable {

        public position: Vector;
        public velocity: Vector;

        constructor(_position: Vector) {

            this.position = _position;
            this.velocity = new Vector(0, 0);
        }

        public move(_timeslice: number): void {

            // Multiplier auf die Position -> größere Explosion
            this.position.x += getRandomArbitrary(-5 * radiusMultiplier, 5 * radiusMultiplier);
            this.position.y -= getRandomArbitrary(-5 * radiusMultiplier, 5 * radiusMultiplier);

        }

        public draw(_color: string): void {
            // console.log("movable move");
        }
    }
}