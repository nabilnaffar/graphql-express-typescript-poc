import * as express from 'express';
import { addUser, getAllUsers, getUser, updateUser } from '../services/users.service';

const usersController = express.Router();

usersController.get('/', (req:express.Request, res: express.Response) => res.json(getAllUsers()));

usersController.get('/:id', (req:express.Request, res: express.Response) => {
    const user = getUser(req.params.id);
    user ? res.json(user) : res.sendStatus(404);
});

usersController.post('/', (req:express.Request, res: express.Response) => res.json(addUser(req.body)));

usersController.put('/:id', (req:express.Request, res: express.Response) => res.json(updateUser(req.body)));

export default usersController;