import { Player } from './Player';
import { BoardController } from './BoardController';
import { first, orderBy } from "lodash";

export class Game {

    private boardController: BoardController;
    private players: Player[] = [];
    private lastEntryNumber: number = 0;

    constructor(boardController: BoardController) {
        this.boardController = boardController;
    }

    addPlayer(player: Player): void {
        this.lastEntryNumber++;
        player.entryOrder = this.lastEntryNumber;
        this.players.push(player);
    }

    getLeaderBoard(): Player[] {
        return orderBy(this.players, ['points'], ['desc']);
    }

    nextMove(): void {
        let nextMovingPlayer = this.getNextMovingPlayer();
        let turnEnded = false;
        nextMovingPlayer.rollTheDice();
        while (!turnEnded) {
            turnEnded = this.boardController.checkTile((nextMovingPlayer.points));
            if (this.boardController.tileIsNormal(nextMovingPlayer.points)) { turnEnded = true; }
        }
        console.table(this.getLeaderBoard());
    }

    getNextMovingPlayer(): Player {
        return first(orderBy(this.players, ['currentTurn', 'entryOrder'], ['asc', 'asc']));
    }

}