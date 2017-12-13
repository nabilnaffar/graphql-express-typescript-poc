import { GraphQLSchema } from 'graphql';
import query from './cards.queries';
import mutation from './cards.mutations';

const schema = new GraphQLSchema({
    query,
    mutation
});

export default schema;