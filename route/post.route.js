const express = require('express');
const postsController = require("../controller/post.controller.js");

const router = express.Router();

router.get("/",postsController.getAll);
 router.get("/:id",postsController.getId);
// router.post("/",postsController.create);
// router.put("/:id",postsController.update);
// router.delete("/:id",postsController.delete);

module.exports = router;