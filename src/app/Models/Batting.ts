export class Batting {
    private didNotBat: boolean;
    private batiingNow: boolean;
    private runs: number;
    private facedballs: number;
    private typeOfOut: string;
    private out: boolean;
    private strikeRate: number = 0;
    constructor() {
        this.didNotBat = true;
        this.batiingNow = false;
        this.runs = 0;
        this.facedballs = 0;
        this.typeOfOut = "NotOut";
        this.out = false;
        this.strikeRate = 0
    }

    setRunsForPlayer(runs: number) {
        this.runs += (+runs);
    }

    getRunsForPlayer() {
        return this.runs;
    }

    setBallFacedByPlayer(balls: number) {
        this.facedballs += balls;
    }

    getBallFacedByPlayer() {
        return this.facedballs;
    }

    getTypeOfOut(typeOfOut: string) {
        this.typeOfOut = typeOfOut;
    }

    setBattingNow(batiingNow: boolean) {
        this.batiingNow = batiingNow;
    }

    setOut() {
        this.out = true;
    }

    getStrikeRateForPlayer() {
        return this.runs / this.facedballs * 100;
    }
}
