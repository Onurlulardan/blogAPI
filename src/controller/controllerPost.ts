import express, {Request, Response} from 'express';
import Post from "../models/modelPost";


const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Bir hata oluştu",
        })
    }
}

const getPost =async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({
            message: "Bir hata oluştu",
        })
    }
}


const deletePost = async ( req: Request, res: Response ) => {
    const id = req.params.id;
    try {
        const deletePost = await Post.findByIdAndDelete(id);
        res.send(deletePost);
    } catch (error) {
        res.status(400).json({
            message: "Bir hata oluştu",
        })
    }
}

const updatePost = async (req: Request, res: Response) => {
    try {
       const updatedPost = await Post.updateOne({_id: req.params.id}, { $set: {
            title: req.body.title,
            subtitle: req.body.subtitle,
            content: req.body.content,
            tag: req.body.tag,
            image: req.body.image,
            createdAt: new Date(),
       }});
       res.json(updatedPost);
    } catch (error) {
        res.status(400).json({
            message: "Bir hata oluştu",
        })
        console.log(error)
    }
}

const addPost = async (req: Request, res: Response) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
    } catch (error) {
        res.status(400).json({
            message: "Bir hata oluştu",
        })
    }
}

export default {getPosts, getPost, addPost, deletePost, updatePost};