const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

app.post("/api/register", (req, res) => {
    console.log(req.body);
    res.json({
        message: "data recieved"
    })
})

app.get('/api/users', (req, res) => {

})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})