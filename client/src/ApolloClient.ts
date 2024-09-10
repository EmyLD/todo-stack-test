import { InMemoryCache } from "../node_modules/@apollo/client/cache/inmemory/inMemoryCache";
import { ApolloClient } from "../node_modules/@apollo/client/core/ApolloClient";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Assure-toi que l'URL pointe vers ton serveur backend
  cache: new InMemoryCache(),
});

export default client;
