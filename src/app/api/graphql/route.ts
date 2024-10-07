import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { apolloResolvers } from '@/shared/graphql/apolloResolvers.apollo';
import { apolloSchema } from '@/shared/graphql/apolloSchema.apollo';

const server = new ApolloServer({
  resolvers: apolloResolvers,
  typeDefs: apolloSchema,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
