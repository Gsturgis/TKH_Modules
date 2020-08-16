//Challenge 3

let Quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "
quote4 = []
var newQuote = Quote.split(" ")

console.log(newQuote)

for (let i = 0; i<newQuote.length; i++){

var quote3  = newQuote[i].toString().replace(/s/g, '$')
console.log(quote3)
  
}
