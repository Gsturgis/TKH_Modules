//asignment 1
let Weekly_Income = parseInt(prompt("How much do you make weekly: "))
let Food_Cost = parseInt(prompt("Cost of food: "))
let Housing_Cost = parseInt(prompt("Cost of housing: "))
let Transportation_Cost = parseInt(prompt("Cost of transportation: "))
let Other_Cost = parseInt(prompt("Additional costs: "))
let Savings_Goals =parseInt(prompt("How much do you want to save in a year?: "))
let Weekly_Savings = Savings_Goals / 52
let Total_Cost = Food_Cost + Housing_Cost +Transportation_Cost + Other_Cost
let Profit = Weekly_Income - Total_Cost
if (Profit > Weekly_Savings) {
console.log("You are on track for your weekly saving goal")
}
else{
	console.log ("you need to save this more per week ")
  console.log( Weekly_Savings - Profit)
}
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
// Challenge 1
let names = ["Westly", "Nicholas", "Nasir", "Sean", "Sean", "Michael","Patrick"
,"Snipes", "Cage", "Jones", "Carter", "Combs", "Jordan", "Ewing"]

let first_name = []

let last_name = []

first_name.push("Westly", "Nicholas", "Nasir", "Sean", "Sean", "Michael","Patrick")

last_name.push("Snipes", "Cage", "Jones", "Carter", "Combs", "Jordan", "Ewing")

console.log(first_name)

console.log(last_name)


// Challenge 2
for (i=4; i<157; i+=4) {
	console.log(i)
}

//Challenge 3

let Quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "
quote4 = []
var newQuote = Quote.split(" ")

console.log(newQuote)

for (let i = 0; i<newQuote.length; i++){

var quote3  = newQuote[i].toString().replace(/s/g, '$')
console.log(quote3)
  
}
