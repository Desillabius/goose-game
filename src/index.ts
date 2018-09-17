import { Game } from './Game';

const game = new Game();

game.addPlayer('Marco');
game.addPlayer('Giulia');
game.addPlayer('Riccardo');
game.addPlayer('Momo');

(window as any).Game = game;

