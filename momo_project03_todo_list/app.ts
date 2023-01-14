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
};

await welcome();

let todos: string[] = [];
let loop = true;

interface condition {
  Todo: string;
  TodoMore: boolean;
}

while (loop) {
  const answers: condition = await inquirer.prompt([
    {
      type: "input",
      name: "Todo",
      message: "Add Your Todo Please! \n",
    },
    {
      type: "confirm",
      name: "TodoMore",
      message: "Wanna add another todo?",
      default: false,
    },
  ]);
  const { Todo, TodoMore } = answers;
  loop = TodoMore;
  Todo
    ? todos.push(Todo)
    : console.log(chalk.red("Kindly Add at least one todo"));
}

if (todos.length > 0) {
  console.log(chalk.blueBright("Your Todo List! "));
  todos.forEach((val) => {
    console.log(chalk.greenBright(val));
  });
}
