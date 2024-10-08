import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(title: String!): Todo
    updateTodo(id: ID!, completed: Boolean!): Todo
    deleteTodo(id: ID!): Boolean
  }
`);

export default schema;
