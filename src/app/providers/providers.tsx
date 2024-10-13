'use client'; // eslint-disable-line
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { SideBar } from '@/features/sideBar';
import { Auth } from '@/features/auth-login';
import { AuthProvider } from '@/features/session';
import { CartProvider } from '@/features/cart';
import clientGQL from '../../shared/api/clientGQL';

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={clientGQL}>
      <AuthProvider sideBar={<SideBar />} auth={<Auth />}>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default AppProviders;
