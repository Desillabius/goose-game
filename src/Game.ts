import { Player } from './Player';
import { BoardController } from './BoardController';
import { first, orderBy } from "lodash";

export class Game {

    private boardController: BoardController;
    private players: Player[] = [];
    private lastEntryNumber: number = 0;

    constructor() {
        this.boardController = new BoardController();
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
        let currentMovingPlayer = this.getCurrentMovingPlayer();
        let turnEnded = false;
        currentMovingPlayer.rollTheDice();
        while (!turnEnded) {
            turnEnded = this.boardController.checkTile(currentMovingPlayer);
        }
        console.table(this.getLeaderBoard());
    }

    getCurrentMovingPlayer(): Player {
        return first(orderBy(this.players, ['currentTurn', 'entryOrder'], ['asc', 'asc']));
    }

}