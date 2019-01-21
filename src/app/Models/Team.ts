import { Players } from './Players';

export class Team {
    private player: Array<Players>;

    private strikeBatsman: Players;
    private nonStrikeBatsman: Players;
    private tempPlayer: Players;
    private strikeBowler: Players;
    constructor() {
        this.player = [];
        for (let index = 0; index < 11; index++) {
            const player = new Players();
            this.player.push(player);
        }
        this.nonStrikeBatsman = new Players();
        this.strikeBatsman = new Players();
        this.strikeBowler = new Players();
    }

    isTeamComplete(): boolean {
        if (this.player.length === 11) {
            return true;
        }
        return false;
    }

    getPlayer() {
        return this.player;
    }

    StrikeBatsman() {
        return this.strikeBatsman;
    }

    NonStrikeBatsman() {
        return this.nonStrikeBatsman;
    }

    changeStrike() {
        this.tempPlayer = this.strikeBatsman;
        this.strikeBatsman = this.nonStrikeBatsman;
        this.nonStrikeBatsman = this.tempPlayer;
    }
    
    getStrikeBowler() {
        return this.strikeBowler;
    }
}