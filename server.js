import express from "express"
import  "dotenv/config"
import routes from "./src/Routes/index.js"
const app =express()
const port=process.env.PORT||8000


app.use(express.json())
app.use(express.urlencoded({encoded:false}))



app.get("/",(req,res)=>{
    return res.json({message:"its wokring"})
})
//routes

app.use(routes)

app.listen(port,()=>{
    console.log(`app is running ${port}`)
})


