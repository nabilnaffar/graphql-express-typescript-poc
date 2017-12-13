import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import { cardsType, cardType, suitTypes } from './cards.types';
import * as cardsService from '../../services/cards.service';

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
            resolve: (parentVal, args) => cardsService.addCard({color: args.color, number: args.number, suit: args.suit})
        }
    }
})

export default mutation;