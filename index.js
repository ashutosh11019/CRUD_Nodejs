// express import
import express from "express"
const app = express()
const port = process.env.PORT || '3000'
import {join} from "path"
import web from "./routes/web.js"
import connectDB from "./db/connectdb.js"
import dotenv from "dotenv";
dotenv.config();

//Database
const database_url = process.env.MONGO_URL
connectDB(database_url)

// Use to off the extended of express url
app.use(express.urlencoded({extended: false}))

// Static Files
app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))

// Set Templete Engine
app.set("view engine", "ejs")

// Load Routes
app.use("/student", web)



app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
})
