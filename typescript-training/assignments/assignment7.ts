
let reversestring : string = "";
let sentencestring : string = " Java programming is fun and challenging ";

for(let i : number = sentencestring.length-1 ; i >= 0 ; i--)
{
   reversestring = reversestring+sentencestring.charAt(i);

}
console.log(reversestring);

