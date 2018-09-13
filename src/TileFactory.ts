import { Tile } from './Tile';
import { GooseTile } from './GooseTile';

export class TileFactory {

    createTile(type: Object);
    createTile(type: 'normal'): NormalTile;
    createTile(type: 'goose'): Villain;

    public createTile(tileOptions): Tile | Goose {
        if (tileOptions.type === "tile") {
            return new Tile();
        } else if (tileOptions.type === "goose") {
            return new GooseTile();
        } else {
            throw new Error('Select either a Tile or a Goose');
        }
    }
}