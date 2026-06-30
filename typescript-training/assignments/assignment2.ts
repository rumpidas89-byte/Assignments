

function evaluateLoan(

    customerName : string,
    creditScore : number,
    income : number,
    isEmployed : boolean,
    debtToIncomeRatio : number
): void {

    console.log("Loan Evaluation Result For:" + customerName);

    if(creditScore > 750) {

    console.log("loan is Approved");

} else if(creditScore >= 650) {

    if(income >= 50000) {

        if(isEmployed){

            if(debtToIncomeRatio < 40) {
                console.log("loan is approved");
            } else {
                console.log("loan is denied as DTI ratio is very high");
            }
        } else {
            console.log("loan is denied as customer is unemployed");
        }
    } else {
        console.log("loan is denied as income is less than 50000");
    }
} else {
    console.log("creditscore is below 650 load is denied");
}

}


evaluateLoan(
    "John Doe",   // customerName
    720,          // creditScore
    55000.0,      // income
    true,         // isEmployed
    45.0          //debtToIncomeRatio
);





