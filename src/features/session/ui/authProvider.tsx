'use client'; // eslint-disable-line
import React, { useState } from 'react';
import Modal from '@/shared/ui/Modal';
import Close from '@/shared/ui/CloseWindow';
import { AuthContext } from '../model/context';

export function AuthProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
  sideBar: React.ReactNode;
  auth: React.ReactNode;
}) {
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ openAuth, setOpenAuth }}>
      <div>
        {openAuth && (
          <Modal setOpen={setOpenAuth}>
            {localStorage.getItem('access_token') ? (
              props.sideBar
            ) : (
              <div className="w-[450px] bg-white relative p-5 pr-0 pb-0 md:w-screen md:self-end self-center mx-auto">
                <Close setOpen={setOpenAuth} />
                <div className="w-full max-h-[80vh] overflow-y-scroll scroll_width">
                  {props.auth}
                </div>
              </div>
            )}
          </Modal>
        )}
        {children}
      </div>
    </AuthContext.Provider>
  );
}
