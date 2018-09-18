import { Game } from './Game';

const game = new Game();

game.addPlayer('Mario');
game.addPlayer('Luigi');
game.addPlayer('Gianni');
game.addPlayer('Piero');

(window as any).Game = game;