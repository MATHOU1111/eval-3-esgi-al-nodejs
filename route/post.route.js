const express = require('express');
const postsController = require("../controller/post.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/" , authMiddleware ,postsController.getAll);
router.get("/:id" ,authMiddleware , postsController.getId);
router.post("/", authMiddleware , postsController.create);
router.put("/:id", authMiddleware ,postsController.update);
router.delete("/:id", authMiddleware ,postsController.delete);
router.post("/:id/emotions", authMiddleware, postsController.addEmotion);
router.delete("/:id/emotions", authMiddleware, postsController.removeEmotion);

module.exports = router;