import { Utils } from './Utils';
import { sum, last } from "lodash";

export class Player {

    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    currentTurn: number = 0;
    lastDiceRoll: number[] = [];
    lastDiceRollSum: number = 0;
    points: number = 0;
    entryOrder: number = 0;
    diceRollsHistory: [number[]] = [[]];
    isJumping: boolean = false;

    rollTheDice(): void {
        this.incrementTurn(1);
        this.lastDiceRoll = [Utils.getRandomDiceNumber(), Utils.getRandomDiceNumber()];
        this.lastDiceRollSum = this.sumDiceRoll(this.lastDiceRoll);
        this.addPoints(this.sumDiceRoll(this.lastDiceRoll));
        this.updateDiceRollsHistory(this.lastDiceRoll);
        this.printToConsole();
    }

    incrementTurn(numberOfTurns: number): void {
        this.currentTurn += numberOfTurns;
    }

    addPoints(points: number): void {
        this.points += points;
    }

    sumDiceRoll(lastDiceRoll: number[]): number {
        return sum(lastDiceRoll);
    }

    updateDiceRollsHistory(lastDiceRoll: number[]): void {
        this.diceRollsHistory.push(lastDiceRoll);
    }

    private printToConsole() {
        console.log(this.name + ' rolls ' + this.lastDiceRoll.toString());
    }

    replayLastDiceRoll() {
        this.addPoints(this.sumDiceRoll(last(this.diceRollsHistory)));
    }

}