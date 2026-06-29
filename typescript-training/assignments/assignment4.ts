


let transactions : number[] = [50000, -2000, 3000, -150000, -200, -300, 4000, -3000];

let creditcount : number = 0;
let debitcount : number = 0;
let amountcredited : number = 0;
let amountdebited : number = 0;
let balance : number = 0;
let suspiciouscount : number = 0;

for (let i : number = 0; i < transactions.length; i++);
{
   if (transactions[i] > 0)
   {
    creditcount++ ;
    amountcredited += transactions[i];
    balance += transactions[i];

    if(transactions[i] > 10000)
    {
        console.log(“Suspicious credit Transaction with Amount: ", transactions[i]);
        suspiciouscount++;

    }

}
} else {

    debitcount++ ;
    amountdebited += transactions[i];
    balance += transactions[i];

if(transactions[i] < -10000)
{

    console.log(“Suspicious credit Transaction with Amount: " , transactions[i]);
        suspiciouscount++
}
}







