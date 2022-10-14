import { BasketballPlayer } from "./basketball.player";
import { SoccerPlayer } from "./soccer.player";

export class PlayerStarter {

    public basketballPlayer: BasketballPlayer;
    public soccerPlayer: SoccerPlayer;

    constructor() {
        this.basketballPlayer = new BasketballPlayer();
        this.soccerPlayer = new SoccerPlayer();
    }

    public startPlaying(): void {
        this.basketballPlayer.playBasketball();
        this.soccerPlayer.playSoccer();
    }
}