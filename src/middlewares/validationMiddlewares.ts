import {object, AnySchema} from "yup";
import express, {Request, Response, NextFunction} from 'express';

const validation = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
        return next();
    } catch (error) {
        res.status(400).json({ error });
    }
}

export default validation;