console.log("Enter a number");
const data = require('fs').readFileSync(0, 'utf8');

const n = Number (data.trim());

for( let i = 1 ; i <= 10 ; i++){
    console.log(`${n}*${i}=${n*i}`);
}
