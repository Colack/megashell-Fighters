const special = () => {
    console.log("Star Platinum, Za Warudo!");

    rl.question("Press enter to continue...", () => {

        clear();

        console.log("Star Platinum, beat him up!");

        rl.question("Press enter to continue...", () => {

            clear();

            let stack = 0;

            let random = Math.floor(Math.random() * 10) + 1;

            for (var i = 0; i < random; i++) {

                stack += 5;

                setTimeout(() => {

                    console.log("ORA!");

                });

            }

            clear();

            console.log("ORA!");

            rl.question("Press enter to continue...", () => {

                console.log("|| Star Platinum Dealt " + stack + " damage!");

                rl.question("Press enter to continue...", () => {

                    return stack;

                });

            });

        });

    });
}

export { special };
