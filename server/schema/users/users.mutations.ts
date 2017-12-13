import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import * as usersService from '../../services/users.service';
import { UserType } from './users.types';

//Mutations

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser:{
            type: UserType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parentVal, args) => usersService.addUser({name: args.name, age: args.age})
        },
        updateUser:{
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parentVal, args) => usersService.updateUser({id: args.id, name: args.name, age: args.age})
        }
    }
})

export default mutation;