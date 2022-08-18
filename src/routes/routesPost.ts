import express from "express";
import controllerPost  from "../controller/controllerPost";
import validate from "../middlewares/validationMiddlewares";
import postSchema from "../validations/postValidations";

const router = express.Router();


router.get("/", controllerPost.getPosts);
router.get("/:id", controllerPost.getPost);
router.post("/", validate(postSchema), controllerPost.addPost);
router.delete("/:id", controllerPost.deletePost);
router.patch("/:id", controllerPost.updatePost);

export default router