import express from "express"
import { faker } from '@faker-js/faker';
const router = express.Router();

const teachers = [];
const students = [];

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.get('/teachers', function(request, response){
    response.send(teachers)
})

router.post('/teachers', function(request, response){
    const teacher = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };

    teachers.push(teacher);

    response.send(teacher)
})

router.get('/students', function(request, response){
    response.send(students)
})

router.post('/students', function(request, response){
    const student = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };

    students.push(student);

    response.send(student)
})


export default router;