import Button from '@/shared/ui/Button';
import React from 'react';
import { useApolloClient } from '@apollo/client';
import navigate from '@/shared/lib/redirect';
import { sessionQueries } from '@/entities/session/api';

export function DeleteAccountButton() {
  const client = useApolloClient();
  const [mutation] = sessionQueries.delete();
  async function deleteAccount() {
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
    <Button
      onClick={() => deleteAccount()}
      className="my-[10px]"
      intent={'border'}
    >
      delete account
    </Button>
  );
}
