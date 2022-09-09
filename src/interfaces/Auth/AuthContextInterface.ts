import { ReactNode, Dispatch, SetStateAction } from "react";
import { FieldValue } from "react-hook-form";

export interface IContextValues {
  login: (data: FieldValue<ILoginData>) => void;
  registerUser: (data: FieldValue<ILoginData>) => void;
  movie_id: number;
  setMovie_Id: Dispatch<SetStateAction<number>>;
}

export interface IContext {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IContext {
  children: ReactNode;
}

export interface IReponseLogin {
  data: {
    accessToken: string;
    user: {
      name: string;
      email: string;
      avatar?: string;
      id: string;
    };
  };
}

export interface IReponseRegister {
  data: {
    accessToken: string;
    user: {
      name: string;
      email: string;
      avatar?: string;
      id: string;
    };
  };
}
