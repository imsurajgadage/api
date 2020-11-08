import express  from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();  // whole app lies here

const PORT = 5000;

app.use(bodyParser.json());  // iniitalize bodyParser

app.use('/users', usersRoutes);

app.get('/' , (req , res) => {
    
    res.send('Hello From Home Page');
})


app.listen( PORT , () => console.log(`server running on port : http://localhost:${PORT}`));
