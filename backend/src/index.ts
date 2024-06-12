import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import feedbackRoutes from './controllers/feedback.controller';

const app = express();
const port = 3000;

//middleware
app.use(cors());

app.use(bodyParser.json());
app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
