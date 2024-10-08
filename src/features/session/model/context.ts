import { createContext, Dispatch, SetStateAction } from 'react';

type AuthContextType = {
  openAuth: boolean;
  setOpenAuth: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthContextType);
