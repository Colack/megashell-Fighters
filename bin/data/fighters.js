const fighters = [
    {
        name: "megaShell" ,
        health: 100,
        attack: 10,
        defense: 10,
        quote: "I_am_the_megaShell",
        attackQuote: "Get_Destroyed",
        missQuote: "Uh_oh",
        special: () => {

            console.log("Special!");

            console.log("megaShell's special is ready!");

            console.log("Its_My_Time_To_Shine");

            console.log("I_will_use_the_help_command");

            rl.question("Press_Enter_to_continue", (answer) => {

                clear();

                console.log("|| Help");
                
                console.log("megaShell gained half its health!");

                if (whoFight === 1) {

                    currentFighter.health = currentFighter.health + (currentFighter.health / 2);

                    console.log("|| " + currentFighter.name + "'s health is now " + currentFighter.health);

                } else {

                    enemieFighter.health = enemieFighter.health + (enemieFighter.health / 2);

                    console.log("|| " + enemieFighter.name + "'s health is now " + enemieFighter.health);

                }

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });
                

            });

        }
    },
    {
        name: "Jotaro Kujo",
        health: 75,
        attack: 20,
        defense: 25,
        quote: "Yare yare daze",
        attackQuote: "ORA!",
        missQuote: "Yare yare daze",
        special: () => {

            console.log("Special!");

            console.log("Jotaro Kujo's special is ready!");

            console.log("Star Platinum, The World!");

            let x = 0;

            rl.question("Press enter to continue...", (answer) => {

                var randomNumber = Math.floor(Math.random() * 10) + 1;

                for (var i = 0; i < randomNumber; i++) {

                    console.log("ORA!");

                    x += 10;

                }
                
                if (whoFight === 1) {

                    enemieFighter.health -= x;

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                } else {

                    currentFighter.health -= x;

                    console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                }

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });
                
            });

        }
    },
    {
        name: "Dio",
        health: 100,
        attack: 30,
        defense: 5,
        quote: "Za Warudo!",
        attackQuote: "Muda!",
        missQuote: "Wryyyyyy!",
        special: () => {

            console.log("Special!");

            console.log("Dio's special is ready!");

            if (currentFighter.name === "Jotaro Kujo") {

                console.log("Wryyyyy... I killed Kakyoin, and now your life is mine!");

            } else {

                console.log("Wryyyyy...");

            }

            rl.question("Press enter to continue...", (answer) => {

                console.log("Za Warudo!");

                console.log("|| Time Has Stopped!");

                console.log("Hmmm... These blades will do just fine...");

                rl.question("Press enter to continue...", (answer) => {

                    let stack = 0;

                    var randomNumber = Math.floor(Math.random() * 10) + 1;

                    for (var i = 0; i < randomNumber; i++) {

                        console.log("Muda!");
        
                        stack += 10;
        
                    }

                    rl.question("Press enter to continue...", (answer) => {

                        clear();

                        console.log(`Wryyyyyy... Time shall continue! And you shall take ${stack} damage!`);

                        if (whoFight === 1) {

                            enemieFighter.health -= stack;

                            console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                        } else {

                            currentFighter.health -= stack;

                            console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                        }
            
                        console.log("|| Time Has Resumed!");

                        rl.question("Press enter to continue...", (answer) => {

                            if (whoFight == 0) {
        
                                fight(1);
        
                            } else {
        
                                fight(0);
        
                            }
        
                        });

                    });

                });


            });

        }
    },
    {
        name: "Axel",
        health: 165,
        attack: 20,
        defense: 0,
        quote: "uwu",
        attackQuote: "Oh No!",
        missQuote: "God Damn!",
        special: () => {
                
            console.log("Special!");

            console.log("Axel's special is ready!");

            console.log("Its My Time to Shine!");

            rl.question("Press enter to continue...", (answer) => {

                console.log("Its time for a giant Slam!");

                rl.question("Press enter to continue...", (answer) => {

                    // make a number half of the current fighter's health

                    var randomNumber = Math.floor(currentFighter.health / 2);

                    // take that number from the enemie fighter's health

                    if (whoFight === 1) {

                        enemieFighter.health -= randomNumber;

                    } else {

                        currentFighter.health -= randomNumber;

                    }

                    // print the enemie fighter's health

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                    rl.question("Press enter to continue...", (answer) => {

                        if (whoFight == 0) {
    
                            fight(1);
    
                        } else {
    
                            fight(0);
    
                        }
    
                    });

                });

            });
        
        }
    },
    {
        name: "fat bastard",
        health: 120,
        attack: 30,
        defense: 0,
        quote: "i do cardio because i eat too much, i eat too much because i do cardio.",
        attackQuote: "get in my belly!",
        missQuote: "ive got a turd poken out",
        special: () => {

            console.log("Special!");

            console.log("fat bastard's special is ready!");

            console.log("taste my fart!");

            rl.question("Press enter to continue...", (answer) => {

                // get a quarter of the enemies health

                if (whoFight === 1) {

                    var randomNumber = Math.floor(enemieFighter.health / 4);

                    // take that number away from the enemies health

                    enemieFighter.health -= randomNumber;

                    // heal the current fighter's health by that number

                    currentFighter.health += randomNumber;

                    // print the enemie fighter's health

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                } else {

                    var randomNumber = Math.floor(currentFighter.health / 4);

                    // take that number away from the enemies health

                    currentFighter.health -= randomNumber;

                    // heal the current fighter's health by that number

                    enemieFighter.health += randomNumber;

                    // print the enemie fighter's health

                    console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                }

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });

            });

        }
    },
    {
        name: "Jaqviontavius",
        health: 100,
        attack: 5,
        defense: 45,
        quote: "my name is jaqviontavius i steal and do drugs",
        attackQuote: "Get off my block!",
        missQuote: "Stop Running!",
        special: () => {

            console.log("Special!");

            console.log("Jaqviontavius's special is ready!");

            console.log("I'll kill you!");

            rl.question("Press enter to continue...", (answer) => {

                if (whoFight === 1) {

                    enemieFighter.health -= 20;

                    // log the enemie fighter's health

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                } else {

                    currentFighter.health -= 20;

                    // log the enemie fighter's health

                    console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                }

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });
                
            });

        }
    },
    {
        name: "Dark Prince",
        health: 75,
        attack: 20,
        defense: 5,
        quote: "I am the Dark Prince of the Realm",
        attackQuote: "My sword is on fire, and I will put your head on it!",
        missQuote: "You will not escape my blade!",
        special: () => {

            console.log("Special!");

            console.log("Dark Prince's special is ready!");

            console.log("I will make you a slave to death!");

            console.log("The Sword's flame burns.");

            console.log("The arena is on fire!");

            rl.question("Press enter to continue...", (answer) => {

                clear();

                console.log("There is no escape!");

                rl.question("Press enter to continue...", (answer) => {

                    console.log("Darkness Slash!");

                    rl.question("Press enter to continue...", (answer) => {

                        clear();

                        let x = 0;

                        let randomNumber = Math.floor(Math.random() * 20) + 1;

                        for (var i = 0; i < randomNumber; i++) {

                            console.log("Slash!");

                            x += 3;

                        }

                        rl.question("Press enter to continue...", (answer) => {

                            clear();


                            if (whoFight === 1) {

                                enemieFighter.health -= x;

                                // log the enemie fighter's health

                                console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");


                            } else {

                                currentFighter.health -= x;

                                // log the enemie fighter's health

                                console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                            }

                            rl.question("Press enter to continue...", (answer) => {

                                if (whoFight == 0) {

                                    fight(1);

                                } else {

                                    fight(0);

                                }

                            });

                        });

                    });

                });

            });

        }
    },
    {
        name: "Colack",
        health: 100,
        attack: 20,
        defense: 10,
        quote: "Wait... How did I get here?",
        attackQuote: "damage += 10!",
        missQuote: "Did I code this wrong...?",
        special: () => {

            console.log("Special!");

            console.log("Colack's special is ready!");

            console.log("With the power of code, I will destroy you!");

            rl.question("Press enter to continue...", (answer) => {

                clear();

                console.log("Colack's code is running...");

                console.log("Time to make a random number!");

                rl.question("Press enter to continue...", (answer) => {

                    clear();

                    let randomNumber = Math.floor(Math.random() * 100) + 1;

                    console.log("The random number is: " + randomNumber);

                    rl.question("Press enter to continue...", (answer) => {

                        clear();

                        if (whoFight === 1) {

                            enemieFighter.health -= randomNumber;

                            // log the enemie fighter's health

                            console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                        } else {

                            currentFighter.health -= randomNumber;

                            // log the enemie fighter's health

                            console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                        }

                        rl.question("Press enter to continue...", (answer) => {

                            if (whoFight == 0) {

                                fight(1);

                            } else {

                                fight(0);

                            }

                        });

                    });

                });

            });

        }
    },
    {
        name: "Ryder",
        health: 125,
        attack: 10,
        defense: 10,
        quote: "Bark Bark~",
        attackQuote: "Bark Bark Boi",
        missQuote: "Frick",
        special: () => {

            console.log("Special!");

            console.log("Ryder's special is ready!");

            console.log("Imma slam your face in!");

            rl.question("Press enter to continue...", (answer) => {

                clear();

                console.log(`Ryder is slamming your face in!`);

                let randomNumber = Math.floor(Math.random() * 10) + 1;

                let x = 0;

                for (var i = 0; i < randomNumber; i++) {

                    console.log("Slam!");

                    x += 5;

                }

                rl.question("Press enter to continue...", (answer) => {

                    clear();

                    if (whoFight === 1) {

                        enemieFighter.health -= x;

                    }  else {

                        currentFighter.health -= x;

                    }

                    console.log(`Ryder Slammed your face in for ${x} damage!`);

                    rl.question("Press enter to continue...", (answer) => {

                        if (whoFight == 0) {

                            fight(1);

                        } else {

                            fight(0);

                        }

                    });

                });

            });

        }
    },
    {
        name: "Sans",
        health: 1,
        attack: 1,
        defense: 200,
        quote: "Get Dunked on",
        attackQuote: "You're going to have a bad time",
        missQuote: "I'm having a bad time.",
        special: () => {

            console.log("Special!");

            console.log("Sans's special is ready!");

            console.log("Gaster Blaster!");

            rl.question("Press enter to continue...", (answer) => {

                clear();

                if (whoFight === 1) {

                    enemieFighter.health -= 50;

                    // log the enemie fighter's health

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                } else {

                    currentFighter.health -= 50;

                    // log the enemie fighter's health

                    console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                }

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });

            });

        }
    },
    {
        name: "Pepsi Man",
        health: 75,
        attack: 20,
        defense: 20,
        quote: "I am Pepsi Man.",
        attackQuote: "Smack!",
        missQuote: "Dang!",
        special: () => {

            console.log("Special!");

            console.log("Pepsi Man's special is ready!");

            console.log("Drive The Pepsi Truck!");

            if (whoFight === 1) {

                enemieFighter.health -= 50;


            } else {

                currentFighter.health -= 50;
                
            }

            console.log("I have dealt 50 damage to you.");

            rl.question("Press enter to continue...", (answer) => {

                if (whoFight == 0) {

                    fight(1);

                } else {

                    fight(0);

                }

            });

        }
    },
    {
        name: "Caeser",
        health: 75,
        attack: 20,
        defense: 20,
        quote: "Mama Mia!",
        attackQuote: "~Bubble",
        missQuote: "Damn!",
        special: () => {

            console.log("Special!");

            console.log("Caeser's special is ready!");

            console.log("Caeser is healing himself!");

            rl.question("Press enter to continue...", (answer) => {

                clear();

                // heal 25% of the current fighter's health

                if (whoFight === 1) {

                    enemieFighter.health += (enemieFighter.health * 0.25);

                    // log the enemie fighter's health

                    console.log("|| " + enemieFighter.name + " has " + enemieFighter.health + " health left!");

                } else {

                    currentFighter.health += (currentFighter.health * 0.25);

                    // log the enemie fighter's health

                    console.log("|| " + currentFighter.name + " has " + currentFighter.health + " health left!");

                }

                rl.question("Press enter to continue...", (answer) => {

                    if (whoFight == 0) {

                        fight(1);

                    } else {

                        fight(0);

                    }

                });

            });

        }
    },
    {
        name: "Joseph Joestar",
        health: 125,
        attack: 20,
        defense: 5,
        quote: "I will use my Hamon to defeat you!",
        attackQuote: "Hamon... OverDrive!",
        missQuote: "Oh My God!",
        special: () => {

            console.log("Joseph Joestar's special is ready!");

            console.log("Its time for my special!");

            rl.question("Press enter to continue...", (answer) => {
                
                clear();

                console.log("A bright flash of light appears!");

                console.log("Joseph's Hamon is charging!");

                rl.question("Press enter to continue...", (answer) => {

                    clear();

                    console.log("Crazy.");

                    rl.question("Press enter to continue...", (answer) => {

                        console.log("My.")

                        rl.question("Press enter to continue...", (answer) => {

                            console.log("Beat!");

                            rl.question("Press enter to continue...", (answer) => {

                                let random = Math.floor(Math.random() * 10) + 1;

                                let stack = 0;

                                for (var i = 0; i < random; i++) {

                                    console.log("Hamon Overdrive!");

                                    stack += 5;

                                }

                                rl.question("Press enter to continue...", (answer) => {

                                    if (whoFight === 1) {

                                        enemieFighter.health -= stack;

                                    } else {

                                        currentFighter.health -= stack;

                                    }

                                    console.log("Joseph used his Hamon to deal " + stack + " damage!");

                                    rl.question("Press enter to continue...", (answer) => {

                                        if (whoFight == 0) {

                                            fight(1);

                                        } else {

                                            fight(0);

                                        }

                                    });
                                    
                                });

                            });

                        });

                    });

                });
            
            });
        }
    }
];

export { fighters };
