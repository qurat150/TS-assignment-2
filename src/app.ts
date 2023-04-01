// VEHICAL RENTAL SYSTEM

abstract class Vehicle {
    private _rented: boolean = false;
    constructor(private _make: string, private _model: string | number, private _year: number, _rented: boolean) { }
    get make() {
        return this._make
    }
    get model() {
        return this._model
    }
    get year() {
        return this._year
    }
    get rented() {
        return this._rented
    }
    abstract rentalRate(): number;
    rent() {
        if (this._rented) {
            console.log("Vehicle is already rented.");
        } else {
            this._rented = true;
            console.log("Vehicle has been rented.");
        }
    }

    return() {
        if (this._rented) {
            this._rented = false;
            console.log("Vehicle has been returned.");
        } else {
            console.log("Vehicle is not currently available.");
        }
    }
}
class Car extends Vehicle {
    constructor(make: string, model: number, year: number, rented: boolean, private _color: string) {
        super(make, model, year, rented)
    }
    rentalRate(): number {
        return 50;
    }
    get color() {
        return this._color;
    }
    set color(color: string) {
        this._color = color;
    }
}
const bmw = new Car("BMW", 2023, 2023, false, "white")

console.log(bmw.rented);
bmw.rent();
console.log(bmw.rented);
bmw.return();
console.log(bmw.rented);
console.log(bmw.color); 
