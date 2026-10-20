/**
 * Function to generate a list of random numbers
 * @returns List of random numbers
 */
exports.randomNumbers= () => {
  const numberMax = 6,
    numberMin = 1;

  let number1, number2, number3;

  do {
    number1 = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
    number2 = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
    number3 = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
  } while (number1 === number2 || number1 === number3 || number3 === number2);

  return [number1, number2, number3];
}
