export class Bowling {
    didNotBall: boolean;
    numberOfOvers: number;
    wicketsTaken: number;
    runsGiven: number;

    constructor() {
        this.didNotBall = true;
        this.numberOfOvers = 0;
        this.runsGiven = 0;
        this.wicketsTaken = 0;
    }

    getNumberOfOvers() {
        return this.numberOfOvers;
    }

    setNumberOfOvers() {
        this.numberOfOvers++;
    }

    setRunsGiven(runsGiven: number) {
        this.runsGiven += (+runsGiven);
    }

    getRunsGiven() {
        return this.runsGiven;
    }

    setWicketsTaken() {
        this.wicketsTaken++;
    }
}