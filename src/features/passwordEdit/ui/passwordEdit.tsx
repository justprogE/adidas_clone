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
import Close from '@/shared/ui/Close';
import {
  DetailsPasswordSchema,
  DetailsPasswordSchemaType,
} from '../model/password-schema';

export function PasswordEdit() {
  const [open, setOpen] = useState(false);
  const [mutation] = userQueries.updatePassword();
  const form = useForm<DetailsPasswordSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(DetailsPasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  });

  async function changePassword(oldPassword: string, newPassword: string) {
    try {
      await mutation({
        variables: {
          where: {
            oldPassword,
            newPassword,
          },
        },
      });
      form.reset();
      return setOpen(false);
    } catch {
      return form.setError('oldPassword', { message: 'Wrong password' });
    }
  }
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <TextAction>edit</TextAction>
      </div>
      {open && (
        <Modal setOpen={setOpen}>
          {' '}
          <div className="w-[853px] pt-[10px] m-auto pb-10 px-[35px] bg-white relative md:w-screen md:self-end md:m-0">
            <div
              onClick={() => setOpen(false)}
              className="z-10 md:right-[25px] w-[50px] h-[50px] absolute top-[-25px] right-[-25px] border-black border-[1px] bg-white flex items-center justify-center cursor-pointer"
            >
              <Close />
            </div>
            <div className="max-h-[80vh] overflow-y-scroll scroll_width">
              <h4 className="text-[30px] uppercase font-neueBold">
                Edit your password
              </h4>
              <div className="pr-5">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((changedData) =>
                      changePassword(
                        changedData.oldPassword,
                        changedData.newPassword,
                      ),
                    )}
                  >
                    <FormField
                      control={form.control}
                      name="oldPassword"
                      render={({ field }) => (
                        <FormItem className="mt-5">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormLabel>Old Password *</FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem className="mt-10">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormLabel>New Password *</FormLabel>
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
                        save changes
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="max-w-[375px]">
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
          </div>
        </Modal>
      )}
    </div>
  );
}
