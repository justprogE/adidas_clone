import { userQueries } from '@/entities/user/api';
import Button from '@/shared/ui/Button';
import React from 'react';
import { useApolloClient } from '@apollo/client';
import navigate from '@/shared/lib/redirect';

export function DeleteAccountButton() {
  const client = useApolloClient();
  const [mutation] = userQueries.delete();
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
