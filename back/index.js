const express = require('express')

const app = express()
const PORT = process.env.DEV_PORT

app.use(express.static('../client/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname.replace('back', '') + 'client/index.html')
})
app.get('/image', (req, res) => {
    res.sendFile(__dirname.replace('back', '') + 'client/image1_0.jpg')
})
app.get('/logo', (req, res) => {
    res.sendFile(__dirname.replace('back', '') + 'client/32x32_image1_0-4.jpg')
})
app.disable('x-powered-by')
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is listening on port ${PORT}`)
})
