import inquirer from "inquirer";
//todo list done
//array done
//function or if else done
//operations:add,update,delete,view,exit done
//if else
//while loop
console.log("WELCOME!Areesha to-do list app.");
let todolist = ["bilal", "hafsa", "ali"];
let condition = true;
async function todo(todolist) {
    while (condition) {
        const operations = await inquirer.prompt([{
                message: "select any one?",
                type: "list",
                name: "select",
                choices: ["add", "update", "delete", "view", "exit"]
            }]);
        if (operations.select === "add") {
            const add = await inquirer.prompt([{
                    message: "Would you like to add some todo?",
                    type: "input",
                    name: "addtodo",
                }]);
            todolist.push(add.addtodo);
            console.log(todolist);
        }
        else if (operations.select === "update") {
            const update = await inquirer.prompt([{
                    message: "which item you update?",
                    type: "list",
                    name: "updatetodo",
                    choices: todolist
                }]);
            const newupdate = await inquirer.prompt([{
                    message: "which item you replace?",
                    type: "input",
                    name: "updated"
                }]);
            let newtodo = todolist.filter(val => val != update.updatetodo);
            todolist = [...newtodo, newupdate.updated];
            console.log(todolist);
        }
        else if (operations.select === "delete") {
            const remove = await inquirer.prompt([{
                    message: "which item want you remove?",
                    type: "list",
                    name: "deletetodo",
                    choices: todolist
                }]);
            let dele = todolist.filter(val => val != remove.deletetodo);
            todolist = [...dele];
            console.log(todolist);
        }
        else if (operations.select === "view") {
            todolist.forEach((addtodo, index) => {
                console.log(`${index}:${addtodo}`);
            });
        }
        else if (operations.select === "exit") {
            condition = false;
        }
    }
}
todo(todolist);
