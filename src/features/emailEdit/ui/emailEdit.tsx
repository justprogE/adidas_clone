import React, { useState } from 'react';
import Image from 'next/image';
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
import close from '@/shared/assets/close.svg';
import {
  DetailsEmailSchema,
  DetailsEmailSchemaType,
} from '../model/email-schema';

export function EmailEdit() {
  const [open, setOpen] = useState(false);
  const { data } = userQueries.get();
  const [mutation] = userQueries.updateEmail();
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
    } catch {
      return form.setError('email', { message: 'This email is taken' });
    }
  };
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <TextAction>edit</TextAction>
      </div>
      {open && (
        <Modal>
          {' '}
          <div className="w-[853px] max-h-[92vh] pt-[10px] m-auto pb-10 px-[35px] bg-white relative md:w-screen">
            <div
              onClick={() => setOpen(false)}
              className="md:right-[25px] w-[50px] h-[50px] absolute top-[-25px] right-[-25px] border-black border-[1px] bg-white flex items-center justify-center cursor-pointer"
            >
              <Image className="w-[25px] h-[25px]" src={close} alt="" />
            </div>
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
                  <div className="w-[375px]">
                    <Button
                      className="mt-[34px]"
                      intent={'secondary'}
                      disabled={!form.formState.isValid}
                    >
                      update details
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="w-[375px]">
                <Button
                  onClick={() => setOpen(false)}
                  className="mt-[18px] w-[375px]"
                  intent={'border'}
                >
                  cancel
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
