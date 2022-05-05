import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connectDB from './config/db.js';
import todoRouter from './routers/todo.js'

const app = express();

dotenv.config()
connectDB()

app.use(express.json({ extended: true }));
app.use(bodyParser.json())
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/api/todo", todoRouter);
// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});