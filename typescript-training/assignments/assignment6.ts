

let n : number = 7 ;

let prime : boolean = true ;

if (n <= 1) {
    console.log(n+ "is not a prime number");
    prime = false;

}

for ( let i : number = 2 ; i < n ; i++ ) {
    if (n % i === 0) {
        prime = false;
        break;

    }

}
if(prime) {
    console.log(n+ " is a prime number");

} else {
    console.log(n+ " is not a prime number");
}


