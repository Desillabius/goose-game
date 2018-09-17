import { Tile } from './Tile';
import { Player } from './Player';

export class BridgeTile extends Tile {

    handleMove(player: Player) {

        player.addPoints(6);

        return false;

    }

}