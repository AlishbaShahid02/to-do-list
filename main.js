import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyan("Welcome to your todo list"));
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion", type: "input",
            message: "What would you like to add in your todo list?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add  more in your todo list?",
            default: "true"
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
