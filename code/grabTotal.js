module.exports.function = function grabTotal (firstNumber, secondNumber, operator) {
 
  var combine;
  
  if (operator == "plus")
    combine = firstNumber + secondNumber;
  else if (operator == "minus")
    combine = firstNumber - secondNumber;
  else if (operator == "multiply" || operator == "multiplied" || operator == "times")
    combine = firstNumber * secondNumber;
  else (operator == "divided")
    combine = firstNumber / secondNumber;
    
  return combine;
}
