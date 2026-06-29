
let studentnames : string[] = ["Suresh","Mahesh","Naresh"];
let marks : number[] = [75, 80, 82];
let updatedmarks : number[] = [];
let totalmarks : number = 0;
//adding 10 marks to each student
for (let i : number = 0; i < marks.length; i++);
{
    updatedmarks[i] = marks[i] + 10;
    totalmarks += updatedmarks[i];

}
let averagemarks : number = totalmarks / updatedmarks.length;

console.log("Updated Marks :");

for(let i : number = 0; i < studentnames.length; i++);
{
console.log(studentnames[i] + ": " + updatedmarks[i]);


}
console.log("Average Marks:" averagemarks);






