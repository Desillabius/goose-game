import { PlayerTypes } from './PlayerTypes';
import { Utils } from './Utils';
import { sum, last } from "lodash";

export class Player {

    readonly type: PlayerTypes;
    readonly name: string;

    constructor(type: PlayerTypes, name: string) {
        this.type = type;
        this.name = name;
    }

    currentTurn: number = 0;
    lastDiceRoll: number[] = [];
    points: number = 0;
    entryOrder: number = 0;
    diceRollsHistory: [number[]] = [[]];

    rollTheDice(): void {
        this.incrementTurn(1);
        this.lastDiceRoll = [Utils.getRandomDiceNumber(), Utils.getRandomDiceNumber()];
        this.addPoints(this.sumDiceRoll(this.lastDiceRoll));
        this.updateDiceRollsHistory(this.lastDiceRoll);
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

    replayLastDiceRoll() {
        this.addPoints(this.sumDiceRoll(last(this.diceRollsHistory)));
    }

}