const serverless = require("serverless-http");
const app = require("../../app");

/**
 * Netlify Function that wraps the Express app
 */
exports.handler = serverless(app);
