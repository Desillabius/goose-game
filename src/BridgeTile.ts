import { Tile } from './Tile';
import { Player } from './Player';

export class BridgeTile extends Tile {

    handleMove(player: Player) {

        this.printToConsole(player);

        player.addPoints(6);

        return false;

    }

    printToConsole(player: Player): void {
        console.log(player.name + ' moves from ' + (((player.points - player.lastDiceRollSum) == 0) ? 'Start' : (player.points - player.lastDiceRollSum)) + ' to ' + player.points + ', The Bridge.');
    }

}