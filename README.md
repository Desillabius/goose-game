# Game of The Goose

This is a console-only TypeScript implementation of the "Game of The Goose"

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### What do you need?

Node.js

### Installing

```
npm install
```

### Building for development
```
npm run build
```

### Building for production
```
npm run build:prod
```

### Launch built-it web server
```
npm start
```

### Remarks

This is a console-only game, so you should open the web browser console (preferibly Chrome).

The game is based on a main class called Game, which is already instanciated.

index.ts already contains 4 player, just remove line from 5 to 8 to have a clean game, so you can add the players of your choice.

### Public methods

Game class has some public method, used to interact with the game

* addPlayer(name: string);
  which take only one parameter, the player name

* printLeaderBoard();
  print the leader board

* nextMove();
  automatically rolls the dice for the next moving player

* restart();
  restart the game from the beginning

### Basic game steps example

```
Game.addPlayer('Mario');
```
```
Game.addPlayer('Luigi');
```
```
Game.addPlayer('Piero');
```
```
Game.printLeaderBoard();
```
```
Game.nextMove();
```
```
Game.nextMove();
```
```
Game.nextMove();
```
```
Game.printLeaderBoard();
```

## Authors

* **Marco Carrodano**

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details