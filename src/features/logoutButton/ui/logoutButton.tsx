import { userQueries } from '@/entities/user/api';
import Button from '@/shared/ui/Button';
import React from 'react';
import { useApolloClient } from '@apollo/client';

export function LogoutButton() {
  const client = useApolloClient();
  const [mutation] = userQueries.logout();
  async function logOut() {
    try {
      await client.clearStore();
      await mutation();
      return localStorage.removeItem('access_token');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Button onClick={() => logOut()} className="my-[10px]" intent={'border'}>
      log me out
    </Button>
  );
}
