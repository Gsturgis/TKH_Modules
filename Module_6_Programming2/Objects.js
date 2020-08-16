let Car = {
	color: "Black",	
	model: "Sedan",
	transmission: "Auto",
	Manufacturer: "Acura",

	MyCar: function(){
	console.log(" I am currently driving a " + this.Manufacturer)
	}

	,get manu(){
		return this.Manufacturer
	}
	,set manu(value){
		this.Manufacturer = value
	}
}

Car.manu = "Tesla"
console.log(Car.manu)
Car.MyCar()

// example 2
let Teams = {
Basketball: "Nets",
Baseball: "Yankees",
Football: "Giants",
Soccer: "FC Barecelona",

MyTeam: function(){
	alert("My favorite team is the Giants!!")
}

,get basket(){
	return this.basketball

	}
,set basket(value){
	this.basketball = value

	}

}
Teams.basketball = "Lakers"
console.log(Teams.basket)
Teams.MyTeam()

// example 3

let Animals = {

Dog: "Pitbull",
Cat: "Tabby",
Fish: "Nemo",
Monkey: "Macaque",

favanimal: function(){
	console.log("My favorite animal is the silver-back gorilla")
}

,get swimgood(){
	return this.Fish 

	}
,set swimgood(value){
	this.Fish = value
	}

}
Animals.Fish = "Clownfish"
console.log(Animals.swimgood)
Animals.favanimal()