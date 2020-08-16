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






