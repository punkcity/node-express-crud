import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/expRoutes';

const app = express();
const PORT = 3010;

mongoose.Promise = global.Promise;
//mongoose connection
mongoose.connect('mongodb://localhost/ExpressDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sercving static files from public folder
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => {
    res.send(`Hello from Pankaj. Node and Express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
