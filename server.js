const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world!!!!!!"
    })
})

app.listen(80, () => {
    console.log('server running on port 80')
})