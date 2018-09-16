import { Tile } from './Tile';
import { Player } from './Player';

export class HarmlessTile extends Tile {

    handleMove(player: Player): boolean {

        super.handleMove(player);

        return true;

    }

}