const express = require('express')

const app = express()

app.post("/api/register", (req, res) => {
    res.send('inside backend')
})

app.get('/api/users', (req, res) => {

})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})