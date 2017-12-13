import { GraphQLSchema } from 'graphql';
import query from './users.queries';
import mutation from './users.mutations';

//SCHEMA

const schema = new GraphQLSchema({
    query,
    mutation
});

export default schema;