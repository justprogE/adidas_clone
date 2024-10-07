import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userQueries } from '@/entities/user/api';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';
import Button from '@/shared/ui/Button';
import {
  PasswordSchema,
  type PasswordSchemaType,
} from '../model/password-schema';
import { AuthContext } from '../../session/@x/context';

export function AuthPasswordForm({
  data,
}: {
  data: { email: string; password: string };
}) {
  const [mutation] = userQueries.create();
  const form = useForm<PasswordSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const { setOpenAuth } = useContext(AuthContext);

  // eslint-disable-next-line
  async function auth(password: string) {
    try {
      const user = await mutation({
        variables: {
          where: {
            email: data?.email,
            password,
            cart: [],
            points: 50,
          },
        },
      });
      localStorage.setItem('access_token', user?.data?.createUser?.token ?? '');
      return setOpenAuth(false);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => auth(values.password))}
        className="pr-5"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormLabel>Password *</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          intent={'secondary'}
          className="mt-5 md:w-full"
          disabled={!form?.formState?.isValid}
        >
          continue
        </Button>
      </form>
    </Form>
  );
}
