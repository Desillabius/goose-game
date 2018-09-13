import { Tiles } from './Board';
import { TileFactory } from './TileFactory';

export class BoardController {

    private tileFactory: TileFactory

    constructor(tileFactory: TileFactory) {

        this.tileFactory = tileFactory;

    }

    checkTile(tileNumber: number) {

        let currentTile = this.tileFactory.createTile(Tiles[tileNumber]);

    }

    tileIsNormal(tileNumber: number): boolean {

        return Tiles[tileNumber].type == 'normal';

    }

}