exports.randomNumbers= () => {
  const numberMax = 6,
    numberMin = 1;

  let number1, number2, number3;

  do {
    number1 = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
    number2 = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
    number3 = Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
  } while (number1 === number2 || number1 === number3 || number3 === number2);

  return [number1, number2, number3];
}
