const readline = require("readline")

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function mainMenu(){
    console.log("Factorial Application");

    console.log("1) Say hello")
    console.log("2) Compute Factorial")
    console.log("3) Exit")

    r1.question("Enter your choice (1-3)", choice =>{
        
        if(choice=="1"){
            console.log("Hello :) ")
        } else if (choice =="2"){
            computeFactorial()
        } else if(choice =="3"){
            console.log("Exiting Program")
            console.log("GoodBai")
        } else {
            console.log("just like u, wasn't the choice either")
            console.log("Choose again, the one that's true")
        }
    })
}