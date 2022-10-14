import { Player } from "./player";

export class SoccerPlayer implements Player {
    
    play(): void {
        this.playSoccer();
    }

    private playSoccer(): void {
        console.log(' playing soccer ');
    }

}