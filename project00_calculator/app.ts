#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2500);
  });
};

const welcome = async () => {
  let title = chalkAnimation.rainbow(
    "Wait!!! program is running in few seconds"
  );
  await sleep();
  title.stop();

  console.log(` _____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
};

await welcome();

const programFunc = async () => {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      message: "Which operation you want to perform \n",
    },

    {
      type: "number",
      name: "numberOne",
      message: "Enter First Value:",
    },

    {
      type: "number",
      name: "numberTwo",
      message: "Enter Second Value:",
    },
  ]);

  if (answers.operator == "Addition") {
    console.log(
      chalk.green(
        `${answers.numberOne} + ${answers.numberTwo} = ${
          answers.numberOne + answers.numberTwo
        }`
      )
    );
  } else if (answers.operator == "Subtraction") {
    console.log(
      chalk.red(
        `${answers.numberOne} - ${answers.numberTwo} = ${
          answers.numberOne - answers.numberTwo
        }`
      )
    );
  } else if (answers.operator == "Multiplication") {
    console.log(
      chalk.red(
        `${answers.numberOne} * ${answers.numberTwo} = ${
          answers.numberOne * answers.numberTwo
        }`
      )
    );
  } else if (answers.operator == "Division") {
    console.log(
      chalk.red(
        `${answers.numberOne} % ${answers.numberTwo} = ${
          answers.numberOne % answers.numberTwo
        }`
      )
    );
  }
};

const startAgain = async () => {
  do {
    await programFunc();
    var again = inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? Press y or n:",
    });
  } while (
    (await again).restart == "y" ||
    (await again).restart == "Y" ||
    (await again).restart == "yes" ||
    (await again).restart == "YES" ||
    (await again).restart == "Yes"
  );
  {
  }
};

startAgain();
