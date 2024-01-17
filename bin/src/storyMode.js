import readline from "readline";
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';

import { onGameStart } from "../index.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function onFileStart() {

    clear();

    console.log("|| Story Mode");

    console.log("|| 1. New Game");
    console.log("|| 2. Load Game");
    console.log("|| 3. Exit");

    rl.question("> ", (answer) => {

        if (answer == 1) {

            rl.question("|| What will the name of the file be? ", (answer) => {

                // check if answer is a string 

                if (typeof answer == "string") {

                    if (answer.length > 3) {

                        if (answer.length < 20) {

                            const file = fs.readFileSync('./bin/src/storyMode/storyMode.json', 'utf8');
                            const data = JSON.parse(file);
            
                            data.save = true;
                            data.fileName = answer;
            
                            fs.writeFileSync('./bin/src/storyMode/storyMode.json', JSON.stringify(data));

                            onGameStart();

                        } else {

                            console.log("|| The name of the file is too long!");

                            onFileStart();

                        }

                    } else {

                        console.log("|| The name must be at least 4 characters long.");

                        onFileStart();

                    }

                } else {

                    console.log("|| That is not a string!");

                    onFileStart();

                }

            });

        } else if (answer == 2) {

            // use fs to read a json file

            const file = fs.readFileSync('./bin/src/data/save.json', 'utf8');
            const data = JSON.parse(file);

            if (data.save == true) {

                // load save data
                
            } else {

                console.log("|| No save data found.");
                onFileStart();

            }

        } else if (answer == 3) {

            onGameStart();

        }

    });

}

function onGameStart() {

    clear();

    console.log("Our story begins...");

    setTimeout(() => {

        console.log("'Sir, is this Arena good enough for you?'");

        setTimeout(() => {

            console.log("'Yes, it is.'");

            setTimeout(() => {

                console.log("'Shall we begin?'");

                setTimeout(() => {

                    console.log("'Yes.'");

                    setTimeout(() => {

                        console.log("'I will tell the announcer that we are ready.'");

                        setTimeout(() => {

                            clear();

                            console.log("**BEEP***");

                        }, 3000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}
