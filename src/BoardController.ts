import { Tiles } from './Board';
import { TileFactory } from './TileFactory';
import { Player } from './Player';

export class BoardController {

    private tileFactory: TileFactory;

    constructor() {

        this.tileFactory = new TileFactory();

    }

    checkTile(player: Player) {

        let currentTile = this.tileFactory.createTile(Tiles[player.points].type);

        return currentTile.handleMove();

    }

    tileIsNormal(tileNumber: number): boolean {

        return Tiles[tileNumber].type == 'normal';

    }

}