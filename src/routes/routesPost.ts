import express from "express";
import controllerPost  from "../controller/controllerPost";

const router = express.Router();

router.get("/", controllerPost.getPosts);
router.get("/:id", controllerPost.getPost);
router.post("/", controllerPost.addPost);
router.delete("/:id", controllerPost.deletePost);
router.patch("/:id", controllerPost.updatePost);

export default router