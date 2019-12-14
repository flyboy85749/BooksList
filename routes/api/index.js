const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

router.use("/", bookRoutes);

module.exports = router;
