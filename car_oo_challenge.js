// part one make a class for each vehicle. 
class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model; 
        this.year = year;
    }
}
honk() {
    return "beep.";
}
toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
}



// Part two - Create a class for a car. 
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);   
        this.numWheels = 4;
        }
    }




// Part 3 - Create a class for a MotorCycle
class MotorCycle extends Vehicle {
    constructor(make, moddel, year) {
        super(make, model, year) {
        this.numWheels = 2;
    }
}

revEngine() {
    return "VROOM!!";
    }
}



// Part 4 - Create a class for a garage.
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceOf Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle Added";
        }
    }








