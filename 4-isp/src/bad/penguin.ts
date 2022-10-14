import Bird from "./bird";

export class Penguin implements Bird {
    
    fly() {
        // not ok, penguin can't do it;
    }

    chirp() {
        // ok, penguin can do it;
    }
    
    scratch() {
        // ok, penguin can do it;
    }

}