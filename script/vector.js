var Endabgabe_EIA2;
(function (Endabgabe_EIA2) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x = _factor;
            this.y = _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
        subtract(subtrahend) {
            return new Vector(this.x - subtrahend.x, this.y - subtrahend.y);
        }
        get length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        normalize() {
            let length = this.length;
            if (length == 0)
                return;
            this.x /= length;
            this.y /= length;
        }
    }
    Endabgabe_EIA2.Vector = Vector;
})(Endabgabe_EIA2 || (Endabgabe_EIA2 = {}));
//# sourceMappingURL=vector.js.map