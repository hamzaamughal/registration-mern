const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send('inside backend')
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})