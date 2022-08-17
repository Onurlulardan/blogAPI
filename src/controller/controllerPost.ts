import express, {Request, Response} from 'express';
import Post from "../models/modelPost";


const getPost = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({
            message: error,
        })
    }
}

const addPost = async (req: Request, res: Response) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
    } catch (error) {
        res.status(409).json({
            message: error,
        })
    }
}

export default {getPost, addPost};