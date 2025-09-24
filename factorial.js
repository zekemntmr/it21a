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
function computeFactorial(){
    console.log("Factorial");
    
    rl.question("Enter a number for factorial: ", (numStr)=>{

        if(isNaN(num)|| num<0){
            console.log("Please enter a non-negative integer");

        } else {
            let fact = 1;

            for (let i = 1; i <= num; i++){
                fact *=i;

            }
            console.log("the factorial of " + num + " is " + fact);
        }

    });
}
function backToMenu{
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

