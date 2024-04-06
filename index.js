#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 4545;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinEntered.pin === pin) {
    let atmQuestion = await inquirer.prompt([
        {
            name: "accountType",
            message: "select your account type",
            type: "list",
            choices: ["current Account", "saving Account"],
        },
        {
            name: "transMethod",
            message: "select your transaction",
            type: "list",
            choices: ["cash withdrawal", "Fast cash"],
        },
    ]);
    if (atmQuestion.transMethod == "cash withdrawal") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter the ammount u want to withdraw",
                type: "number",
            },
        ]);
        if (balance >= cashwithdrawAmount.withdrawal) {
            balance -= cashwithdrawAmount.withdrawal;
            console.log(`your total balance is : ${balance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select the ammount u  want to withdrawal",
                type: "list",
                choices: ["1000", "3000", "5000"],
            },
        ]);
        if (balance >= fastCashAmount.fastCash) {
            balance -= fastCashAmount.fastCash;
            console.log(`your total balance is : ${balance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
}
else {
    console.log("wrong pin");
}
