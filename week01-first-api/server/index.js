import express from "express"
const app = express()
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/teachers', function(request, response){
    response.send('teachers are here!')
})

app.listen(port, () => {
    console.log(`My first backend app is listening on port ${port}`)
})

