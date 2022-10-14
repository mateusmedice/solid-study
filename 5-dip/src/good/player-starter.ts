import { BasketballPlayer } from "./basketball.player";
import { Player } from "./player";
import { SoccerPlayer } from "./soccer.player";

export class PlayerStarter {

    public players: Player[];

    public startPlaying(): void {

        this.players.push(new SoccerPlayer());
        this.players.push(new BasketballPlayer());

        this.players.forEach(player => {
            player.play();
        });
        
    }
}