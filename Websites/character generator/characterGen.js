class Stats {
    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }

    rollForStats() {
        const statsToRoll = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

        statsToRoll.forEach(stat => {
            const rolls = [];
            for (let i = 0; i < 4; i++) {
                rolls.push(Math.floor(Math.random() * 6) + 1);
            }
            // Sort in ascending order
            rolls.sort((a, b) => a - b);
            rolls.shift();
            // Drop the lowest value
            const sum = rolls.reduce((total, roll) => total + roll, 0);

            // Update the corresponding input field with the sum
            document.getElementById(stat).value = sum;

            // Log the generated array
            console.log(`Generated array for ${stat}: ${rolls}`);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const characterStats = new Stats(0, 0, 0, 0, 0, 0);

    rollButton.addEventListener("click", function () {
        characterStats.rollForStats();
    });
});
