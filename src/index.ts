import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";

const app = express();
const port = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/graphql`);
});
