


const transactions : number[] = [50000, -2000, 3000, -150000, -200, -300, 4000, -3000];

let creditcount : number = 0;
let debitcount : number = 0;
let amountcredited : number = 0;
let amountdebited : number = 0;
let suspiciouscount : number = 0;

for (const amount of transactions) {

    if (amount > 0) {
        creditcount++ ;
        amountcredited += amount;

        if (amount > 10000){
            console.log(`Suspicious credit Transaction with Amount : ${amount}`);
            suspiciouscount++ ;

        }

    } else {
        debitcount++ ;
        amountdebited -= amount;

        if (amount < -10000) {
            console.log(`Suspicious dedit Transaction with Amount : ${amount}`);
            suspiciouscount++ ;

        }
    }
}

const finalbalance : number = amountcredited -amountdebited;

        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", creditcount);
        console.log("Total number of debit transactions:", debitcount);
        console.log("Total amount credited:", amountcredited);
        console.log("Total amount debited:", amountdebited);
        console.log("Final remaining amount in the account:", finalbalance);
        console.log("Total number of suspicious transactions:", suspiciouscount);
