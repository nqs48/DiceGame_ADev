/**
 * Controller free roll GET method, the roll happens in the browser and is not saved
 * @param {*} req route's request data (none)
 * @param {*} res route's response data (UI View)
 */
exports.getFreeRoll = (req, res) => {
  try {
    res.status(200).render("freeRoll", { title: "Free Roll" });
  } catch (error) {
    res.status(500).render("error", { error, title: "Error" });
  }
};
