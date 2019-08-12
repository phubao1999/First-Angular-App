const express = require('express')
const app = express()
const port = 3000
const jsonParser = require('body-parser').json();

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/signin', (req, res) => res.send('Hello From Sign In'));
app.post('/signin', jsonParser, (req, res) => {
    res.send(req.body.name);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
