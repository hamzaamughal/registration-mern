const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

const dbUrl = 'mongodb+srv://regis:regis123@registration-mern.je3c1.mongodb.net/registration?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log(`MongoDB is Connected..!!`);
    } catch (error) {
        console.log(error);
    }
}

//connect DataBase
connectDB()

app.post("/api/register", async (req, res) => {
    try {
        await User.create({
            name: req.body.userName,
            email: req.body.userEmail
        })
        res.json({
            message: "User Registered"
        })
    } catch (error) {
        res.json({
            message: "That email is already registered"
        })
    }
})

app.get('/api/users', (req, res) => {

})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})