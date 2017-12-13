import * as express from 'express';
import { addUser, getAllUsers, getUser, updateUser } from '../services/users.service';

const usersController = express.Router();

usersController.get('/', async (req:express.Request, res: express.Response) => res.json(await getAllUsers()));

usersController.get('/:id', async (req:express.Request, res: express.Response) => {
    const user = await getUser(req.params.id);
    user ? res.json(user) : res.sendStatus(404);
});

usersController.post('/', async (req:express.Request, res: express.Response) => res.json(await addUser(req.body)));

usersController.put('/:id', async (req:express.Request, res: express.Response) => res.json(await updateUser(req.body)));

export default usersController;