/*
    MIT License

    Copyright (c) 2022 Jack Spencer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.   
*/

import readLine from 'readline';
import clear from 'clear';
import figlet from 'figlet';
import { fighters } from './data/fighters.js';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

var whoFight;
var fightModeActivated = false;
var currentFighter = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    quote: "",
    attackQuote: "",
    missQuote: "",
    special: () => {
        console.log("|| This is an error!");
        console.log("Aborting...");
        process.exit(1);
    }
}
var enemieFighter = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    quote: "",
    attackQuote: "",
    missQuote: "",
    special: () => {
        console.log("|| This is an error!");
        console.log("Aborting...");
        process.exit(1);
    }
}

export function onGameStart() {

    clear();

    console.log(figlet.textSync('Fight', {
        font: 'Ghost',
        horizontalayout: 'default',
        verticalLayout: 'default'
    }));  

    fightModeActivated = true;

    console.log("|| Modes: ");
    console.log("|| 1. Fight Mode");
    console.log("|̶|̶ ̶2̶.̶ ̶S̶t̶o̶r̶y̶ ̶M̶o̶d̶e̶");
    console.log("|| 3. Character List");
    console.log("|| 4. Credits");
    console.log("|| 5. To-Do List");
    console.log("|̶|̶ ̶6̶.̶ ̶E̶x̶t̶e̶n̶d̶e̶d̶ ̶M̶e̶n̶u̶");
    console.log("|| 0: Exit");

    rl.question("> ", (answer) => {

        if (answer == 1) {

                    rl.question("|| What Fighter Would you like to use? ", (answer) => {

                        if (fighters[answer]) {
        
                            currentFighter.name = fighters[answer].name;
                            currentFighter.health = fighters[answer].health;
                            currentFighter.attack = fighters[answer].attack;
                            currentFighter.defense = fighters[answer].defense;
                            currentFighter.attackQuote = fighters[answer].attackQuote;
                            currentFighter.quote = fighters[answer].quote;
                            currentFighter.missQuote = fighters[answer].missQuote;
                            currentFighter.special = fighters[answer].special;
                            
        
                            let randomFighter = fighters[Math.floor(Math.random() * fighters.length)];
        
                            enemieFighter.name = randomFighter.name;
                            enemieFighter.health = randomFighter.health;
                            enemieFighter.attack = randomFighter.attack;
                            enemieFighter.defense = randomFighter.defense;
                            enemieFighter.attackQuote = randomFighter.attackQuote;
                            enemieFighter.quote = randomFighter.quote;
                            enemieFighter.missQuote = randomFighter.missQuote;
                            enemieFighter.special = randomFighter.special;
        
                            console.log(`|| ${currentFighter.name} is ready to fight!`);
        
                            rl.question("|| Are you ready to fight? (y/n) ", (answer) => {
        
                                if (answer == "y") {
        
                                    console.log(`|| ${currentFighter.name} is fighting ${enemieFighter.name}!`);
        
                                    fight();
        
                                } else {
        
                                    console.log("|| You hesitated...");
        
                                    onGameStart();
        
                                }
        
                            });
        
        
        
                        } else {
        
                            console.log("|| That's not a fighter!");

                            onGameStart();
        
                        }
                        
                    });

        } else if (answer == 3) {

                    console.log("|| Fighters: ");

                    for (let i = 0; i < fighters.length; i++) {

                        slashN();
                        console.log(`> ID: ${i} ` + fighters[i].name);       
                        console.log(`Health: ` + fighters[i].health);
                        console.log(`Attack: ` + fighters[i].attack);
                        console.log(`Defense: ` + fighters[i].defense);
                        console.log(`Quote: ` + fighters[i].quote);

                    }

                    rl.question("Press enter to continue...", (answer) => {

                        onGameStart();

                    });

        } else if (answer == 0) {

            console.log("Exiting...");

            fightModeActivated = false;

            process.exit(0);

        } else if (answer == 4) {

            console.log("|| Credits: ");
            slashN();
            console.log("|| Programmed by: ");
            console.log("Jack (Colack)");
            slashN();
            console.log("|| Packages: ");
            console.log("https://www.npmjs.com/package/figlet");
            console.log("https://www.npmjs.com/package/clear");
            console.log("https://www.npmjs.com/package/readline");
            slashN();
            console.log("|| Characters: ");
            console.log("Cole, Andre, Ryder, Jack, for Character Ideas.");
            console.log("Jotaro Kujo, Dio, Caesar, and Joseph Joestar from Jojo's Bizzare Adventure.");
            console.log("Sans from Undertale.");
            console.log("Fat Bastard from Austin Powers.");
            slashN();
            console.log("|| Special Thanks: ");
            console.log("Everyone at StackOverflow.");
            console.log("Everyone at GitHub.");
            console.log("My brother for creating some games, which gave me the inspiration to create this one.");
            console.log("Mr. Essency for encouraging me to create this game.");

            rl.question("Press enter to continue...", (answer) => {

                onGameStart();

            });

        } else if (answer == 2) {

            console.log("|| This mode is not yet available...");

            rl.question("Press enter to continue...", (answer) => {

                onGameStart();

            });

        } else if (answer == 5) {

            console.log("|| To-Do List: ");
            slashN();
            console.log("== Top Priority ==");
            console.log("Choosable Attacks");
            console.log("Characters moved to a different folder.");
            console.log("Story Mode");
            console.log("Colored Text");
            console.log("Better Alpha releases");
            console.log("New Characters");
            slashN();
            console.log("== Minor Priority ==");
            console.log("Fixed Fight Mode");
            console.log("Special Fighters");
            console.log("Items");
            console.log("Beta Release");
            console.log("Better Code handling");
            console.log("Moving Fight code to a different file.");
            console.log("Custom characters");
            slashN();
            console.log("== No Priority ==");
            console.log("Grammar Fixes");
            console.log("Code Organization");
            console.log("Custom Items");
            console.log("Custom Weapons/attacks");
            console.log("Plugins");

            rl.question("Press enter to continue...", (answer) => {

                onGameStart();

            });

        } else if (answer == 6) {
            // To be worked on later!

            console.log("|| This mode is not yet available...");

            rl.question("Press enter to continue...", (answer) => {

                onGameStart();

            });
        } else {

            console.log("|| Invalid Input!");
            
            rl.question("Press enter to continue...", (answer) => {

                onGameStart();

            });

        }

    });

}

function fight() {

    console.log("|| Its time to Fight!");

    const coin = Math.floor(Math.random() * 2);

    if (coin === 0) {

        console.log("|| " + currentFighter.name + " goes first!");

        fightStart(1);

    } else {

        console.log("|| " + enemieFighter.name + " goes first!");

        fightStart(0);

    }

}

function fightStart(who) {

    whoFight = who;

    if (who == 1) {

        const random = Math.floor(Math.random() * 100) + 1;

        if (random == "1") {

            console.log("|| " + currentFighter.name + " used their special attack!");

            clear();

            currentFighter.special();

        } else {

            clear();

        const attack = Math.floor(Math.random() * currentFighter.attack);

        const defense = Math.floor(Math.random() * enemieFighter.defense);

        const damage = attack - defense;

        if (damage < 0) {

            console.log(currentFighter.missQuote);

            console.log("|| Attacked Missed!");

            console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

            rl.question("|| Press enter to continue...", (answer) => {

                fightStart(0);

            });

        } else {

            console.log(currentFighter.attackQuote);

            console.log("|| " + currentFighter.name + " deals " + damage + " damage!");

            console.log("|| " + enemieFighter.name + " has " + (enemieFighter.health - damage) + " health left!");

            enemieFighter.health -= damage;

            if (enemieFighter.health <= 0) {

                console.log("|| " + enemieFighter.name + " has been defeated!");

                console.log("|| " + currentFighter.name + " wins!");

                fightModeActivated = false;

                onGameStart();;

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(0);

                });

            }
            
        }

        }

    } else {

        const random = Math.floor(Math.random() * 100) + 1;

        if (random == "1") {

            console.log("|| " + enemieFighter.name + " used their special attack!");

            clear();

            enemieFighter.special();

            if (currentFighter.health <= 0) {

                console.log("|| " + currentFighter.name + " has been defeated!");

                console.log("|| " + enemieFighter.name + " wins!");

                fightModeActivated = false;

                onGameStart();;

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(1);

                });

            }

        } else {

            clear();

        const attack = Math.floor(Math.random() * enemieFighter.attack);

        const defense = Math.floor(Math.random() * currentFighter.defense);

        const damage = attack - defense;

        if (damage < 0) {

            console.log(enemieFighter.missQuote);

            console.log("|| Attacked Missed!");

            console.log("|| " + currentFighter.name + " has " + (currentFighter.health - damage) + " health left!");

            rl.question("|| Press enter to continue...", (answer) => {

                fightStart(1);

            });

        } else {

            console.log(enemieFighter.attackQuote);

            console.log("|| " + enemieFighter.name + " deals " + damage + " damage!");

            console.log("|| " + currentFighter.name + " has " + (currentFighter.health - damage) + " health left!");

            currentFighter.health -= damage;

            if (currentFighter.health <= 0) {

                console.log("|| " + currentFighter.name + " has been defeated!");

                console.log("|| " + enemieFighter.name + " wins!");

                fightModeActivated = false;

                onGameStart();;

            } else {

                rl.question("|| Press enter to continue...", (answer) => {

                    fightStart(1);

                });

            }
        
        }   

        }

    }

}

function slashN() {
    console.log("\n");
}

onGameStart();

// Jack Spencer
