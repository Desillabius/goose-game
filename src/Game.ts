import { Player } from './Player';
import { BoardController } from './BoardController';
import { first, orderBy, findKey } from "lodash";

export class Game {

    private boardController: BoardController;
    private players: Player[] = [];
    private lastEntryNumber: number = 0;

    constructor() {
        this.boardController = new BoardController();
    }

    addPlayer(name: string): void {
        if (!this.checkForAlreadyExistingPlayer(name)) {
            this.lastEntryNumber++;
            let player = new Player(name);
            player.entryOrder = this.lastEntryNumber;
            this.players.push(player);
            this.printPlayersList();
        } else {
            console.log(name + ': already existing player');
        }
        return;
    }

    printLeaderBoard(): void {
        let leaderBoard = this.getLeaderBoard();
        for (let player of leaderBoard) {
            console.log(player.name, player.points);
        }
    }

    nextMove(): void {
        let currentMovingPlayer = this.getCurrentMovingPlayer();
        let turnEnded = false;
        currentMovingPlayer.rollTheDice();
        while (!turnEnded) {
            turnEnded = this.boardController.checkTile(currentMovingPlayer);
        }
    }

    restart() {
        this.players = [];
        this.boardController.resetBoard();
        this.lastEntryNumber = 0;
    }

    private checkForAlreadyExistingPlayer(name: string) {
        return findKey(this.players, ['name', name]);
    }

    private printPlayersList(): void {
        console.log('Players: ' + this.players.map(player => player.name));
    }

    private getLeaderBoard(): Player[] {
        return orderBy(this.players, ['points'], ['desc']);
    }

    private getCurrentMovingPlayer(): Player {
        return first(orderBy(this.players, ['currentTurn', 'entryOrder'], ['asc', 'asc']));
    }

}