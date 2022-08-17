import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/routesPost";

dotenv.config();

mongoose.connect(`${process.env.DATABASE_URL}`)
.then(()=>{
    console.log("Veritabanına bağlandı");
    app.listen(process.env.PORT || 5000, () => console.log("Server dinleniyor http://localhost:5000"));
})
.catch((error)=>{
    console.log(error.message);
});

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    author: "Onur",
    message: "Kök tengriden selamlar"
  });
});

app.use("/posts", postRoutes);

