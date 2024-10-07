import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const productsEndpoint = new HttpLink({
  uri: 'http://localhost:3000',
});

const clientGQL = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: productsEndpoint,
});

export default clientGQL;
