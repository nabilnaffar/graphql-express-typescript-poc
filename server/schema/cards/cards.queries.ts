import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import { cardsType, cardType } from './cards.types';

const query = new GraphQLObjectType({
    name: 'CardsQueries',
    fields: () => ({
        cards: {
            type: cardsType,
            resolve: () => 'here you go'
        },
        card: {
            type: cardType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (parentVal, args) => 'TBD'
        }
    })
});

export default query;