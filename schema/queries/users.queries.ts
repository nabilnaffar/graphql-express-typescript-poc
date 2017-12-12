import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import * as usersService from '../../services/users.service';
import { UsersType, UserType } from '../types/users.type';

//Queries

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        users: {
            type: UsersType,
            resolve: () => usersService.getAllUsers()
        },
        user: {
            type: UserType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (parentVal, args) => usersService.getUser(args.id)
        }
    })
});

export default query;