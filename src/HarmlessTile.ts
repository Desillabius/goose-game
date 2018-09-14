import { Tile } from './Tile';

export class HarmlessTile extends Tile {

    handleMove() {

        //this.player.replayLastDiceRoll();

        return false;

    }

}