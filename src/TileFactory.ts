import { HarmlessTile } from './HarmlessTile';
import { GooseTile } from './GooseTile';
import { SwapPlayerTile } from "./SwapPlayerTile";
import { TilesType } from './TilesType';

export class TileFactory {

    public static createTile(type: TilesType): Tile {
        if (type === TilesType.Harmless) {
            return new HarmlessTile();
        } else if (type === TilesType.Goose) {
            return new GooseTile();
        } else if (type === TilesType.SwapPlayer) {
            return new SwapPlayerTile();
        }
        return null;
    }

}