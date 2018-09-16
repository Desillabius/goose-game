import { HarmlessTile } from './HarmlessTile';
import { GooseTile } from './GooseTile';
import { SwapPlayerTile } from "./SwapPlayerTile";
import { BridgeTile } from "./BridgeTile";
import { TilesType } from './TilesType';
import { Tile } from './Tile';

export class TileFactory {

    public createTile(type: TilesType): Tile {
        if (type === TilesType.Harmless) {
            return new HarmlessTile();
        } else if (type === TilesType.Goose) {
            return new GooseTile();
        } else if (type === TilesType.SwapPlayer) {
            return new SwapPlayerTile();
        } else if (type === TilesType.Bridge) {
            return new BridgeTile();
        }
        return null;
    }

}