const template = {
    name: "Template",
    health: 100,
    attack: 10,
    defense: 10,
    quote: "Template",
    attackQuotes: [
        "Template",
        "Template",
        "Template",
        "Template"
    ],
    defenseQuotes: [
        "Template",
        "Template",
        "Template",
        "Template"
    ],
    attacks: [
        {
            name: "Template",
            damage: 10,
            accuracy: 0.8,
            critical: 0.1
        },
        {
            name: "Template",
            damage: 5,
            accuracy: 0.9,
            critical: 0.1
        },
        {
            name: "Template",
            damage: 10,
            accuracy: 0.9,
            critical: 0.1
        },
        {
            name: "Template",
            damage: 20,
            accuracy: 0.5,
            critical: 0.1
        }
    ],
    special: () => {

        console.log("Template");

        rl.question("Press enter to continue...", (answer) => {

            if (whoFight == 0) {

                fight(1);

            } else {

                fight(0);

            }

        });

    }
}
