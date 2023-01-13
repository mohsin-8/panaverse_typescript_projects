import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 1500);
  });
};

const welcome = async () => {
  let title = chalkAnimation.rainbow("Wait! ATM CLI is Running");
  await sleep();
  title.stop();
};

await welcome();

type answers = {
  userId: string;
  userPin: string;
  accountType: string;
  options: string;
  cashAmount: number;
};

let input: answers = await inquirer.prompt([
  {
    name: "userId",
    type: "string",
    message: "Enter your User Id",
  },

  {
    name: "userPin",
    type: "number",
    message: "Enter your User Pin",
    when(answers) {
      return answers.userId;
    },
  },

  {
    name: "accountType",
    type: "list",
    choices: ["Current Account", "Saving Account"],
    message: "Choose Account Type",
    when(answers) {
      return answers.userPin;
    },
  },

  {
    name: "options",
    type: "list",
    choices: ["Fast Cash", "Cash Withdrawl"],
    message: "Choose Given Below: ",
    when(answers) {
      return answers.accountType;
    },
  },

  {
    name: "cashAmount",
    type: "list",
    choices: [1000, 3000, 5000, 10000],
    message: "Choose Amount: ",
    when(answers) {
      return answers.options === "Fast Cash";
    },
  },

  {
    name: "cashAmount",
    type: "number",
    message: "Enter Amount: ",
    when(answers) {
      return answers.options === "Cash Withdrawl";
    },
  },
]);

const { userId, userPin, cashAmount } = input;

const Balance = Math.floor(Math.random() * 100000);
if (userId && userPin && cashAmount) {
  console.log(Balance);

  if (Balance > cashAmount) {
    let currentBalance = Balance - cashAmount;
    console.log(
      chalk.green(
        `Transaction Successful \nYour Current Balance is ${currentBalance}`
      )
    );
  } else {
    console.log("Insufficent Amount");
  }
}
