import { Player } from "./player";

export class BasketballPlayer implements Player {
    
    play(): void {
        this.playBasketball();
    }

    private playBasketball(): void {
        console.log(' playing basketball ');
    }

}