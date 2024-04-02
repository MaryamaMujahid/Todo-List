#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let conditions = true;
console.log("\n \t Code With Maryuum - Todo List Application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task:"
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added to Todo List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMoer",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addMoer;
}
console.log(" your updated todo list", todolist);
