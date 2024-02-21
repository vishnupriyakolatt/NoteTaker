const express=require('express')
const notes=require('./data/notes')
const dotenv=require('dotenv')
dotenv.config()
const app=express()

const PORT=process.env.PORT||5000

app.get('/',(req,res)=>{
    res.json(notes)
})

app.get('/api/notes/:id',(req,res)=>{
    const singlenotes=notes.find((n)=>n._id===req.params.id)
    res.json(singlenotes)
})

app.listen(PORT,()=>`server started at ${PORT}`)

