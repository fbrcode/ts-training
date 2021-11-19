import { Router } from 'express';
import UserControler from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Hello World');
})

routes.get('/users', UserControler.index);
// routes.get('/users/create', UserControler.create);
routes.post('/users', UserControler.create);

export default routes;