export class Commentry {
    currentBall: number = 0;
    currentOver: number = 0;
    strikeBatsman: string;
    nonStrikeBatsman: string;
    currentBowler: string;
    runsOnCurrentBall: any;
    descriptionForCurrentBall: string;
    constructor(currentBall: number,
        currentOver: number,
        currentBatsman: string,
        currentBowler: string,
        runsOnCurrentBall: any,
        descriptionForCurrentBall: string, nonStrikeBatsman: string) {
        this.currentBall = currentBall;
        this.currentOver = currentOver;
        this.currentBowler = currentBowler;
        this.strikeBatsman = currentBatsman;
        this.runsOnCurrentBall = runsOnCurrentBall;
        this.descriptionForCurrentBall = descriptionForCurrentBall;
        this.nonStrikeBatsman = nonStrikeBatsman;
    }
    setCurrentBall(currentBall: number) {
        this.currentBall = currentBall;
        console.log(this.currentBall);
    }

    setCurrentOver(currentOver: number) {
        this.currentOver = currentOver;
        console.log(this.currentOver);
    }

    setStrikeBatsman(strikeBatsman: string) {
        this.strikeBatsman = strikeBatsman;
        console.log(this.strikeBatsman);
    }

    setCurrentBowler(currentBowler: string) {
        this.currentBowler = currentBowler;
        console.log(this.currentBowler);
    }

    setRunsOnCurrentBall(runOnCurrentBall: number) {
        this.runsOnCurrentBall = runOnCurrentBall;
        console.log(this.runsOnCurrentBall);
    }

    setDescriptionForBall(description: string) {
        this.descriptionForCurrentBall = description;
        console.log(this.descriptionForCurrentBall);
    }

    setNonStrikeBatsman(nonStrikeBatsman: string) {
        this.nonStrikeBatsman = nonStrikeBatsman;
    }

    getNonStrikeBatsman() {
        return this.nonStrikeBatsman;
    }

    getCurrentOver(): number {
        return this.currentOver;
    }

    getCurrentBall(): number {
        return this.currentBall;
    }

    getStrikeBatsman(): string {
        return this.strikeBatsman;
    }

    getCurrentBowler(): string {
        return this.currentBowler;
    }

    getDescriptionForBall(): string {
        return this.descriptionForCurrentBall;
    }
     
    getRunsOnCurrentBall() {
        return this.runsOnCurrentBall;
    }
}