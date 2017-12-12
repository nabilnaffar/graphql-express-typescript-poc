import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import schema from './schema/users.schema';
import usersController from './controllers/users.controller';
import * as expressGraphQL from 'express-graphql';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/graphql', bodyParser.json(), expressGraphQL({
    schema, 
    graphiql: true
}));

app.use('/api/users', usersController);

app.listen(8080, () => {
    console.log(' 🏃 💨 💨  Server running on port 8080...');
});
