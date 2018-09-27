import { Player } from './Player';
import { BoardController } from './BoardController';
import { first, orderBy, findKey } from "lodash";
import { Tiles } from './Board';

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

        if (this.players.length<2) {
            console.log('Game cannot start, at least 2 players needed....');
            return;
        }

        let currentMovingPlayer = this.getCurrentMovingPlayer();
        let turnEnded = false;
        currentMovingPlayer.rollTheDice();

        if (this.checkUserVictory(currentMovingPlayer)) {
            return this.gameEnded(currentMovingPlayer);
        }

        if (this.checkUserBounce(currentMovingPlayer)) {
            console.log(currentMovingPlayer.name + ' moves from ' + (Tiles.length - (currentMovingPlayer.lastDiceRollSum - (Tiles.length - currentMovingPlayer.points))) + ' to ' + Tiles.length + '.');
            console.log(currentMovingPlayer.name + ' bounces! ' + currentMovingPlayer.name + ' returns to ' + currentMovingPlayer.points);
            turnEnded = true;
        }

        while (!turnEnded) {
            turnEnded = this.boardController.checkTile(currentMovingPlayer);
        }

    }

    private checkUserBounce(player: Player): boolean {
        if (player.pointsToVictory < 0) {
            player.addPoints(player.pointsToVictory*2);
            return true;
        }
        return false;
    }

    private gameEnded(player: Player): void {
        console.log(player.name + ' wins the game!');
        this.restart();
        console.log('Game restarted. Good luck!');
    }

    private checkUserVictory(player: Player): boolean {
        return player.pointsToVictory == 0;
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