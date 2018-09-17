import { Tile } from './Tile';
import { Player } from './Player';

export class GooseTile extends Tile {

    handleMove(player: Player): boolean {

        this.printToConsole(player);

        player.replayLastDiceRoll();

        return false;

    }

    printToConsole(player: Player): void {
        if (!player.isJumping) {
            player.isJumping = true;
            let previousPoints = player.points - player.lastDiceRollSum;
            console.log(player.name + ' moves from ' + ((previousPoints == 0) ? 'Start' : previousPoints) + ' to ' + player.points + ', The Goose');
        } else {
            console.log(player.name + ' moves again and goes to ' + player.points + ', The Goose');
        }


    }

}