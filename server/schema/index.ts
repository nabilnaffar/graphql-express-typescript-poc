import { mergeSchemas } from "graphql-tools";
import usersSchema from './users';
import cardsSchema from './cards';

export default mergeSchemas({
    schemas: [
        usersSchema, 
        cardsSchema,
    ]
});