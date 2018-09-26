import { Game } from './Game';

const game = new Game();

game.addPlayer('Giulia');
game.addPlayer('Marco');
game.addPlayer('Gianni');
game.addPlayer('Piero');

(window as any).Game = game;