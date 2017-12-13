import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import { cardsType, cardType, suitTypes } from './cards.types';

const mutation = new GraphQLObjectType({
    name: 'CardsMutation',
    fields: {
        pickCard:{
            type: cardType,
            args: {
                color: {type: new GraphQLNonNull(GraphQLString)},
                number: {type: new GraphQLNonNull(GraphQLInt)},
                suit:  {type: new GraphQLNonNull(suitTypes)}
            },
            resolve: (parentVal, args) => 'TBD'
        }
    }
})

export default mutation;