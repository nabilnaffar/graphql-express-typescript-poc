import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLEnumType } from 'graphql';

export const suitTypes = new GraphQLEnumType({
    name: 'Suit',
    values: {
        CLUBS: { value: 0 },
        DIAMONDS: { value: 1 },
        HEARTS: { value: 2 },
        SPADES: { value: 3 }
    }
});

export const cardType = new GraphQLObjectType({
    name: 'Card',
    fields: () => ({
        id: { type: GraphQLString },
        color: { type: GraphQLString },
        number: { type: GraphQLInt },
        suit: { type: suitTypes }
    })
});

export const cardsType = new GraphQLList(cardType);