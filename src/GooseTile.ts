import { Tile } from './Tile';
import { Player } from './Player';

export class GooseTile extends Tile {

    handleMove(player: Player): boolean {

        player.replayLastDiceRoll();

        return false;

    }

}