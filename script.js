let day = 0 // Defines day as a variable
let age = 0 // Defines age as a variable

document.getElementById('check').addEventListener('click', discount) // Starts addEventListener for Validate button and triggers discount function

function discount () {
  day = document.getElementById('input').value // Gets input from input box

  age = document.getElementById('input2').value // Gets input from second input box
  age = parseInt(age) // Turns input into integer

  if ((day == 'Wednesday' || day == 'Friday') && (age >= 13 && age <= 16)) { // Makes if statement that requires day to be Wednesday or Friday and age to be 13 to 16
    document.getElementById('result').style.color = 'green' // Styles text green
    document.getElementById('result').innerHTML = 'You get student discounts!' // Displays message
  } else { // Makes else statement if the above if statement isn't true
    document.getElementById('result').style.color = 'red' // Styles text red
    document.getElementById('result').innerHTML = 'You must pay full price.' // Displays message
  }
}
