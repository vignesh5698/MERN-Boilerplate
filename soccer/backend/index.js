import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';

const app = express();
const PORT = 4000;

//  mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//  body-parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//  CORS setup
app.use(cors());

routes(app);

app.get('/' , (req, res) => {
  res.send(`Our soccer application is running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Our soccer application is running on ${PORT}`)
});