import Modal from '@/shared/ui/Modal';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userQueries } from '@/entities/user/api';
import TextAction from '@/shared/ui/TextAction';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/ui/Form';
import close from '@/shared/assets/close.svg';
import { DetailsSchema, DetailsSchemaType } from '../model/details-schema';

export function DetailsForm() {
  const [open, setOpen] = useState(false);
  const [mutation] = userQueries.updateDetails();
  const { data } = userQueries.get();
  const form = useForm<DetailsSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(DetailsSchema),
    defaultValues: {
      firstName: data?.user?.firstName ?? '',
      lastName: data?.user?.lastName ?? '',
      month: '',
      day: '',
      year: '',
    },
  });
  async function changeDetails(
    firstName: string,
    lastName: string,
  ): Promise<void> {
    try {
      await mutation({
        variables: {
          where: {
            firstName,
            lastName,
          },
        },
      });
      return setOpen(false);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <TextAction>edit</TextAction>
      </div>
      {open && (
        <Modal>
          <div className="w-[853px] max-h-[92vh] pt-[10px] pb-10 px-[35px] bg-white relative md:w-screen m-auto">
            <div
              onClick={() => setOpen(false)}
              className="md:right-[25px] w-[50px] h-[50px] absolute top-[-25px] right-[-25px] border-black border-[1px] bg-white flex items-center justify-center cursor-pointer"
            >
              <Image className="w-[25px] h-[25px]" src={close} alt="" />
            </div>
            <div className="pb-[20px] pr-5">
              <h4 className="text-[30px] uppercase font-neueBold">
                Edit your details
              </h4>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((changedData) =>
                    changeDetails(changedData.firstName, changedData.lastName),
                  )}
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="mt-10">
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormLabel>First Name *</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="mt-10">
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormLabel>Last Name *</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <h5 className="text-lg uppercase font-neueBold mt-10">
                    date of birth
                  </h5>
                  <div className="grid grid-cols-3 gap-[15px] mt-[15px]">
                    <FormField
                      control={form.control}
                      name="month"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type={'number'} />
                          </FormControl>
                          <FormLabel>mm *</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="day"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type={'number'} />
                          </FormControl>
                          <FormLabel>dd *</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type={'number'} />
                          </FormControl>
                          <FormLabel>yyyy *</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    className="mt-[30px]"
                    intent={'secondary'}
                    disabled={!form.formState.isValid}
                  >
                    update details
                  </Button>
                </form>
              </Form>
              <Button
                onClick={() => setOpen(false)}
                className="mt-[10px]"
                intent={'border'}
              >
                cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
