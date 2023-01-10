#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1500);
    });
};
const welcome = async () => {
    const title = chalkAnimation.rainbow("Number Guessing game is ready to run!!!");
    await sleep();
    title.stop();
};
await welcome();
const guessingFunc = async () => {
    let randomNumber = Math.floor(Math.random() * 10);
    const mainQuestion = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Pick a number between 1 to 10:",
        },
    ]);
    if (mainQuestion.num1 === randomNumber) {
        console.log(chalk.green(`your guess is correct ${mainQuestion.num1}`));
    }
    else {
        console.log(chalk.red(`your guess is wrong ${randomNumber}`));
    }
};
const startAgain = async () => {
    do {
        await guessingFunc();
        var again = inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:",
        });
    } while ((await again).restart == "y" ||
        (await again).restart == "Y" ||
        (await again).restart == "yes" ||
        (await again).restart == "YES" ||
        (await again).restart == "Yes");
    {
    }
};
startAgain();
