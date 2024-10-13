import React, { useState } from 'react';
import { Input } from '@/shared/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userQueries } from '@/entities/user/api';
import TextAction from '@/shared/ui/TextAction';
import Modal from '@/shared/ui/Modal';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/ui/Form';
import Button from '@/shared/ui/Button';
import Loader from '@/shared/ui/Loader';
import { sessionQueries } from '@/entities/session/api';
import Close from '@/shared/ui/Close';
import {
  DetailsEmailSchema,
  DetailsEmailSchemaType,
} from '../model/email-schema';

export function EmailEdit() {
  const [open, setOpen] = useState(false);
  const { data } = sessionQueries.get();
  const [mutation, { loading }] = userQueries.updateEmail();
  const form = useForm<DetailsEmailSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(DetailsEmailSchema),
    defaultValues: {
      email: data?.user?.email,
    },
  });

  const changeEmail = async (email: string) => {
    try {
      await mutation({
        variables: {
          where: {
            email,
          },
        },
      });
      return setOpen(false);
    } catch (e) {
      console.log('email Edit error: ', e);
      return form.setError('email', { message: 'This email is taken' });
    }
  };
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <TextAction>edit</TextAction>
      </div>
      {open && (
        <Modal setOpen={setOpen}>
          {' '}
          <div className="w-[853px] pt-[10px] m-auto pb-10 px-[35px] bg-white relative md:w-screen md:m-0 md:self-end">
            <div
              onClick={() => setOpen(false)}
              className="z-10 md:right-[25px] w-[50px] h-[50px] absolute top-[-25px] right-[-25px] border-black border-[1px] bg-white flex items-center justify-center cursor-pointer"
            >
              <Close />
            </div>
            <div className="max-h-[80vh] overflow-y-scroll scroll_width">
              <h4 className="text-[30px] uppercase font-neueBold">
                Edit your email
              </h4>
              <div className="pr-5">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((changedData) =>
                      changeEmail(changedData.email),
                    )}
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mt-5">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormLabel>Email *</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="max-w-[375px]">
                      <Button
                        className="mt-[34px]"
                        intent={'secondary'}
                        disabled={!form.formState.isValid}
                      >
                        {loading ? <Loader /> : 'update details'}
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="max-w-[375px]">
                  <Button
                    onClick={() => setOpen(false)}
                    className="mt-[18px]"
                    intent={'border'}
                  >
                    cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
