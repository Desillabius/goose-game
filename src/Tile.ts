import { Player } from './Player';
import { Tiles } from './Board';

export class Tile {

    handleMove(player: Player): boolean {

        let kickedPlayer = this.kickCurrentPlayerBack(player);

        this.printToConsole(player, kickedPlayer);

        this.updateCurrentPlayer(player);

        return true;

    }

    private updateCurrentPlayer(player: Player) {
        Tiles[player.points].currentPlayer = player;
    }

    printToConsole(player: Player, kickedPlayer: Player | null): void {
        if (!player.isJumping) {
            console.log(player.name + ' moves from ' + (((player.points - player.lastDiceRollSum) == 0) ? 'Start' : (player.points - player.lastDiceRollSum)) + ' to ' + player.points);
        } else {
            player.isJumping = false;
            console.log(player.name + ' moves again and goes to ' + player.points);
        }

        if (kickedPlayer instanceof Player) {
            console.log('On ' + player.points + ' there is ' + kickedPlayer.name + ', who returns to ' + (player.points - player.lastDiceRollSum));
        }

    }

    private kickCurrentPlayerBack(player: Player): Player | null {

        let kickedPlayer = this.checkForPresentPlayer(player);

        if (kickedPlayer instanceof Player) {

            Tiles[player.points].currentPlayer.addPoints(-player.sumDiceRoll(player.lastDiceRoll));

        }

        return kickedPlayer;

    }

    private checkForPresentPlayer(player: Player): Player | null {

        return Tiles[player.points].currentPlayer;

    }

}