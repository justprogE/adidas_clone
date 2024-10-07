import { zodResolver } from '@hookform/resolvers/zod';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import checkMark from '@/shared/assets/check_mark.svg';
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
import { EmailSchema, type EmailSchemaType } from '../model/email-schema';

export function AuthEmailForm({
  setData,
  setStep,
}: {
  setData: Dispatch<SetStateAction<{ email: string; password: string }>>;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const [info, setInfo] = useState(false);
  const form = useForm<EmailSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: '',
      logged: true,
    },
  });

  function addEmail(email: string) {
    setData((prev) => ({ ...prev, email }));
    setStep((prev) => prev + 1);
  }

  function moreInfo(e: React.MouseEvent<HTMLParagraphElement>) {
    e.preventDefault();
    setInfo((prev) => !prev);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => addEmail(data.email))}
        className="pr-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormLabel>EMAIL ADDRESS*</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logged"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                <Input {...field} type={'checkbox'} className="hidden" />
              </FormControl>
              <FormLabel intent={'checkbox'}>
                <div className="flex gap-2 mt-[15px] cursor-pointer">
                  <div className="w-[24px] h-[24px] border-black border-[2px]">
                    {form.getValues('logged') && (
                      <div className="h-full bg-black flex items-center justify-center">
                        <Image
                          className="w-[16px] filter_white"
                          src={checkMark}
                          alt="checkmark"
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-base">
                      Keep me logged in. Applies to all options
                    </p>
                    <div
                      onClick={(e) => e.preventDefault()}
                      className="w-max p-[2px] relative"
                    >
                      <p
                        onClick={(e) => moreInfo(e)}
                        className="hover:bg-black hover:text-white underline"
                      >
                        More info
                      </p>
                      {info && (
                        <p className="moreInfo w-[290px] p-5 bg-[var(--gray)] absolute z-30 -top-[90px] left-[90px]">
                          Staying logged in means you won’t have to enter your
                          password as much over the next 30 days — only select
                          this option on devices only you have access to. Head
                          to your Account to log out at any time (or you can
                          also delete your cookies to log out of this device
                          only).
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FormLabel>
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
