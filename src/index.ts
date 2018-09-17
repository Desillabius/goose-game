import { Game } from './Game';
import { Player } from './Player';
import { PlayerTypes } from './PlayerTypes';

const game = new Game();

(window as any).Game = game;