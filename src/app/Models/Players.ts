
import { Batting } from './Batting';
import { Bowling } from './Bowling';

export class Players {
    private name: string;

    private batting: Batting;
    private bowling: Bowling;
    constructor() {
        this.batting = new Batting();
        this.bowling = new Bowling();
    }
    
    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setBatting() {
        return this.batting;
    }

    getBatting() {
        return this.batting;
    }

    getBowling() {
        return this.bowling;
    }

}