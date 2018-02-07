
const restifyRouter = require('restify-router').Router;
const router = new restifyRouter();

router.add("/user", require("./user"));

module.exports = router;