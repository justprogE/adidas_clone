import {
  ApolloClient,
  ApolloLink,
  gql,
  HttpLink,
  InMemoryCache,
  from,
  fromPromise,
} from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';
import { onError } from '@apollo/client/link/error';

export const USER_ENDPOINT = 'userEndpoint';
export const PRODUCT_ENDPOINT = 'productsEndpoint';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('access_token')}` || null,
    },
  }));
  return forward(operation);
});

async function getTokenJWT() {
  const requestBody = {
    query: `
    mutation getTokens{
      generateTokens{
        token
      }
    }
    `,
  };
  const headersInterceptor = {
    'content-type': 'application/json',
  };
  const options = {
    method: 'POST',
    headers: headersInterceptor,
    body: JSON.stringify(requestBody),
  };

  const res = await fetch('http://localhost:3015/api/graphql', options);
  const response = await res.json();

  if (response?.data?.generateTokens?.token) {
    localStorage.setItem('access_token', response?.data?.generateTokens?.token);
    return response?.data?.generateTokens?.token;
  }
  return localStorage.removeItem('access_token');
}

export const interceptorUser = onError(
  ({ networkError, forward, operation }) => {
    // eslint-disable-next-line
    // @ts-ignore
    if (networkError?.statusCode === 401) {
      return fromPromise(getTokenJWT().then((token) => token))
        .filter((value) => Boolean(value))
        .flatMap((token) => {
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeaders,
              authorization: `Bearer ${token}`,
            },
          });
          return forward(operation);
        });
    }
  },
);

const userEndpoint = new HttpLink({
  uri: 'http://localhost:3015/api/graphql',
  credentials: 'include',
});
const productsEndpoint = new HttpLink({
  uri: 'http://localhost:3000',
});

const clientGQL = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
    fragments: createFragmentRegistry(gql`
      fragment UserFields on User {
        __typename
        id
        email
        password
        firstName
        lastName
        vouchers
        points
        favorites
        cart {
          productId
          size
          quantity
        }
        gender
      }
    `),
  }),
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === USER_ENDPOINT,
    from([authMiddleware, interceptorUser.concat(userEndpoint)]),
    productsEndpoint,
  ),
});

export default clientGQL;
