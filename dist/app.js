"use strict";
// VEHICAL RENTAL SYSTEM
class Vehicle {
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = false;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    rent() {
        if (this._rented) {
            console.log("Vehicle is already rented.");
        }
        else {
            this._rented = true;
            console.log("Vehicle has been rented.");
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            console.log("Vehicle has been returned.");
        }
        else {
            console.log("Vehicle is not currently available.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, _color) {
        super(make, model, year, rented);
        this._color = _color;
    }
    rentalRate() {
        return 50;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}
const bmw = new Car("BMW", 2023, 2023, false, "white");
console.log(bmw.rented);
bmw.rent();
console.log(bmw.rented);
bmw.return();
console.log(bmw.rented);
console.log(bmw.color);
//# sourceMappingURL=app.js.map