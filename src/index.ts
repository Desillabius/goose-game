import { Game } from './Game';
import { Player } from './Player';
import { PlayerTypes } from './PlayerTypes';
import { BoardController } from './BoardController';

const game = new Game(new BoardController);

game.addPlayer(new Player(PlayerTypes.human, 'Marco'));
game.addPlayer(new Player(PlayerTypes.human, 'Giulia'));
game.addPlayer(new Player(PlayerTypes.cpu, 'HAL9000'));
game.addPlayer(new Player(PlayerTypes.cpu, 'WOPR'));

(window as any).Game = game;