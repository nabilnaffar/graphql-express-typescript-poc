import { GraphQLSchema } from 'graphql';
import query from './queries/users.queries';
import mutation from './mutations/users.mutations';

//SCHEMA

const schema = new GraphQLSchema({
    query,
    mutation
});

export default schema;