import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import { cardsType, cardType } from './cards.types';
import * as cardsService from '../../services/cards.service';

const query = new GraphQLObjectType({
    name: 'CardsQueries',
    fields: () => ({
        cards: {
            type: cardsType,
            resolve: () => cardsService.getAllCards()
        },
        card: {
            type: cardType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (parentVal, args) => cardsService.getCard(args.id)
        }
    })
});

export default query;