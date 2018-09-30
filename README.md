# Turn-based Battle Tool

## Introduction
This tool was created to play turn-based battles in a non-virtual game. In this tool each player select a "creature" to play, where each creature has life, energy and how many squares it can moves, besides its attacks.

About the non-virtual game, you can manage it in several ways. You just need something squared (to be your board) and 2 pieces (to be your creatures). You can use a chess board, a tablecloth, or even your floor (if it is squared) with two stuffed animal.


## Database
This project uses Firebase to get the creatures and its characteristics for the game. So you can play a game of any theme. If you mount a database of your favourite anime, you will have a game of your favourite anime =)

The structure of the database is a JSON like this:
```json
{
  "creatures" : {
    "NAME_OF_CREATURE_A" : {
      "energy" : 15,
      "life" : 23,
      "walk" : 2,
      "image" : "https://dominio.com/imagemCreatureA.png",
      "moves" : {
        "ID_ATTACK_A" : {
          "damage" : 6,
          "energy" : 6,
          "name" : "Name of Attack A",
          "range" : 3
        },
        "ID_ATTACK_B" : {
          ...
        },
        "ID_ATTACK_C" : {
          ...
        },
        "ID_ATTACK_D" : {
          ...
        }
      }
    },
    "NAME_OF_CREATURE_B" : {
      ...
    },
    "NAME_OF_CREATURE_C" : {
      ...
    }
  }
}
```

Some notes:
- There is a sample in `db_samples`. 
- You can put several creatures following the same structure. 
- It is better to put 4 attacks for each creature. 
- Images should be around 200x200 pixels


## Environment Setup
You will need a Firebase project (database and hosting). You can create a new Firebase project following [these instructions](https://firebase.google.com/docs/web/setup). Modify `src/fire.js` with the configuration of your Firebase project.

To publish, run locally, and modify the application you will need [Node.js/npm](https://nodejs.org/en/download/). After its installation, run in the project folder the following command to install all dependences.
```
npm instal
npm install -g firebase-tools
```


## Building and Running
```
npm run build
npm run start
```


## Deploying and access your app
```
firebase login
firebase use --add
firebase deploy
```
Go to https://YOURPROJECT.firebaseapp.com