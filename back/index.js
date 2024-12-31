const express = require('express')

const app = express()

app.use(express.static('../client/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname.replace('back', '') + 'client/index.html')
})
app.get('/image', (req, res) => {
    res.sendFile(__dirname.replace('back', '') + 'client/image1_0.jpg')
})
app.disable('x-powered-by')
app.listen(80, "0.0.0.0", () => {
    console.log('Server is listening on port 80')
})
