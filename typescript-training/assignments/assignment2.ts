let creditScore : number = 620;
let income : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number = 35.0;



if (creditScore > 750){
    console.log("loan is approved");
} 
if (creditScore < 650) {
    console.log("loan is denied");
}

if (creditScore >= 650 && creditScore <= 750){
    console.log("additional checks are performed");
    if (income <= 50000 && isEmployed == true && debtToIncomeRatio < 40);{
    console.log("Loan is approved");
    if (income <= 50000 && isEmployed != true && debtToIncomeRatio < 40);{
    console.log("loan is denied");
    if (income <= 50000 && isEmployed == true && debtToIncomeRatio > 40);{
        console.log("loan is denied");
    }

    }
    }
    

} 

