import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors());
app.use(express.jsson())

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB Connected"))
.catch(()=> console.log(err));

const Todo = mongoose.model("Todod", new mongooose.Schema({
    test: String
}));

app.get('/todos', async (req, res) =>{
    res.json(await Todo .find());
})

app.post('/todos', async(req, res) =>{
    const todo = await todo.create({
        text: req.body.text
    })
    res.json(todo)
})

app.delete("/todo/:id", async(req, res) =>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({
        massage: "Deleted"
    })
})

app.listen(process.env.PORT, () )