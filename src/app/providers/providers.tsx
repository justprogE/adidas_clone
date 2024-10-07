'use client'; // eslint-disable-line
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import clientGQL from '../../shared/api/clientGQL';

function AppProviders({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={clientGQL}>{children}</ApolloProvider>;
}

export default AppProviders;
