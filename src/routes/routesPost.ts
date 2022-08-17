import express from "express";
import controllerPost  from "../controller/controllerPost";

const router = express.Router();

router.get("/", controllerPost.getPost);
router.post("/", controllerPost.addPost);

export default router