import express from "express"
const app = express()
const port = 8080;
const teachers = [];
const students = [];

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/teachers', function(request, response){
    response.send(teachers)
})

app.post('/teachers', function(request, response){
    response.send('a teacher is added')
})

app.get('/students', function(request, response){
    response.send(students)
})

app.post('/students', function(request, response){
    response.send('a student is added')
})


app.listen(port, () => {
    console.log(`My first backend app is listening on port ${port}`)
})

