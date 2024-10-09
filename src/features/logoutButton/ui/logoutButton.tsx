import Button from '@/shared/ui/Button';
import React from 'react';
import { useApolloClient } from '@apollo/client';
import navigate from '@/shared/lib/redirect';
import { sessionQueries } from '@/entities/session/api';

export function LogoutButton() {
  const client = useApolloClient();
  const [mutation] = sessionQueries.logout();
  async function logOut() {
    try {
      await client.clearStore();
      await mutation();
      localStorage.removeItem('access_token');
      return navigate();
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
