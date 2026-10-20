/**
 * Function to generate a list of different random dice values
 * @param {number} count how many values to generate (max 6)
 * @returns List of random numbers between 1 and 6, without repeats
 */
exports.randomNumbers= (count = 3) => {
  const faces = [1, 2, 3, 4, 5, 6];

  // Fisher-Yates shuffle, then keep the first values
  for (let i = faces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [faces[i], faces[j]] = [faces[j], faces[i]];
  }

  return faces.slice(0, count);
}
