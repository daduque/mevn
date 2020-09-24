import  express  from 'express';
import  morgan  from 'morgan';
import  cors  from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

//database connection
mongoose.Promise = global.Promise;
const dbConnect = 'mongodb://localhost:27017/dbmevn';
mongoose.connect(dbConnect, {useCreateIndex:true, useNewUrlParser: true})
.then( mongoose => {
    console.log('Connected');
})
.catch(error => {
    console.log(error);
});

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', router);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port') + ' on dev');
});