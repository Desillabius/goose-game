import { Player } from './Player';
import { BoardController } from './BoardController';
import { first, orderBy } from "lodash";
import { PlayerTypes } from './PlayerTypes';

export class Game {

    private boardController: BoardController;
    private players: Player[] = [];
    private lastEntryNumber: number = 0;

    constructor() {
        this.boardController = new BoardController();
    }

    addPlayer(name: string): void {
        this.lastEntryNumber++;
        let player = new Player(PlayerTypes.human, name);
        player.entryOrder = this.lastEntryNumber;
        this.players.push(player);
    }

    printLeaderBoard() {
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

    private getLeaderBoard(): Player[] {
        return orderBy(this.players, ['points'], ['desc']);
    }

    private getCurrentMovingPlayer(): Player {
        return first(orderBy(this.players, ['currentTurn', 'entryOrder'], ['asc', 'asc']));
    }

}