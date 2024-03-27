import inquirer from "inquirer";
let mybalance = 15000;
let mypin = 1209;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["1000", "2000", "5000", "10000", "Another Amount", "Balance inquiry"]
        }
    ]);
    console.log(operationAns.operation);
    if (operationAns.operation === "1000") {
        let amountLeft = (mybalance -= operationAns.operation);
        console.log(`"Dear costumer your remaning balance is:"${amountLeft}`);
    }
    if (operationAns === "2000") {
        let amountLeft = (mybalance -= operationAns.operation);
        console.log(`"Your remaning balance:"${amountLeft}`);
    }
    if (operationAns.operation === "5000") {
        let amountLeft = (mybalance -= operationAns.operation);
        console.log(`"Your remaning balance:" ${amountLeft}`);
    }
    if (operationAns.operation === "10000") {
        let amountLeft = (mybalance -= operationAns.operation);
        console.log(`"Your remaning balance:" ${amountLeft}`);
    }
    if (operationAns.operation === "Another Amount") {
        let anotherAm = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number",
        });
        if (mybalance >= anotherAm.amount) {
            mybalance -= anotherAm.amount;
            console.log(`"Your remaning balance is:"${mybalance}`);
        }
        else
            console.log("You have not enough balance,Try another amount");
    }
    if (operationAns.operation === "Balance inquiry") {
        console.log(`"your Balance is:" ${mybalance}`);
    }
    else {
        console.log("");
    }
}
