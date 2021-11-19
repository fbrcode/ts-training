import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// define type example
// function getUsername(): string {
//   return 'xyz';
// }
// const username: string = getUsername();

app.use(cors());
app.use(routes);
app.listen(3333);
