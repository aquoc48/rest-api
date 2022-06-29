import  express  from "express";
const app = express();

import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

import routes from './routes.js'
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);

console.log(`Server started on port: ${port}`)