import { Player } from './Player';
import { Tiles } from './Board';

export class Tile {

    handleMove(player: Player): boolean {

        this.kickCurrentPlayerBack(player);

        return true;

    }

    private kickCurrentPlayerBack(player: Player): void {

        if (this.checkForPresentPlayer(player)) {

            Tiles[player.points].currentPlayer.points -= player.sumDiceRoll(player.lastDiceRoll);

        }

    }

    private checkForPresentPlayer(player: Player): boolean {

        return Tiles[player.points].currentPlayer instanceof Player;

    }

}