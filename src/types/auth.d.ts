import * as FireAuth from 'firebase/auth';
import { NextRouter } from 'next/navigation';

export interface IAuth extends FireAuth.User {}

export interface AuthState {
  currentUser?: IAuth;
  loading: boolean;
}

export type IEmail = {
  email: string;
};

export type IPassword = {
  password: string;
};

export interface IRegister {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  termsAndConditions?: boolean;
  router?: NextRouter;
}

export interface ILogin {
  email: string;
  password: string;
  remember?: boolean;
  router?: NextRouter;
}

export interface IForgotPassword {
  email: string;
  router?: NextRouter;
}

export interface IProfile {
  fullName: string;
  contactEmail: string;
  phone: string;
  website: string;
  address: string;
  about: string;
}
