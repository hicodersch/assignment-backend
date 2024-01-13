import express from "express"
const app = express()
const port = 8080;

import router from "./expressRouter.js";

app.use(router);

app.listen(port, () => {
    console.log(`My first backend app is listening on port ${port}`)
})

