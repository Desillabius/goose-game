import { Tiles } from './Board';
import { TileFactory } from './TileFactory';
import { Player } from './Player';

export class BoardController {

    private tileFactory: TileFactory;

    constructor() {

        this.tileFactory = new TileFactory();

    }

    checkTile(player: Player): boolean {

        let currentTile = this.tileFactory.createTile(Tiles[player.points].type);

        console.log(player.name, player.sumDiceRoll(player.lastDiceRoll));

        let test = currentTile.handleMove(player);

        debugger;

        return test;

    }

}