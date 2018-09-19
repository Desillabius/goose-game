import { Tiles } from './Board';
import { TileFactory } from './TileFactory';
import { Player } from './Player';

export class BoardController {

    private tileFactory: TileFactory;

    constructor() {

        this.tileFactory = new TileFactory();

    }

    checkTile(player: Player): boolean {

        let currentTile = this.tileFactory.createTile(Tiles[player.points - 1].type);

        return currentTile.handleMove(player);

    }

    resetBoard() {

        for (let tile of Tiles) {
            tile.currentPlayer = null;
        }

    }

}