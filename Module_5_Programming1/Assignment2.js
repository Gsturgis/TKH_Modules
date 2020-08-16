// Assignment 2
let Grades = parseInt(prompt("What is your grade?: "))
if (Grades > 95){
	console.log("A+")
} else if(Grades > 88 && Grades <= 90){
	console.log("A")
} else if(Grades > 84 && Grades <= 88){
	console.log("B+")
} else if(Grades > 76 && Grades <= 84){
	console.log("C+")
} else if(Grades > 70 && Grades <= 76){
	console.log("C")
} else if(Grades > 67 && Grades <= 70){
	console.log("D+")
} else if(Grades > 64 && Grades <= 67){
	console.log("D")
} else if(Grades <= 64){
	console.log("F")
} else {
	console.log("Not a number!")
}