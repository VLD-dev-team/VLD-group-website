const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.listen(port, () => {
    console.log(`VLD website running on ${port}`)
})
