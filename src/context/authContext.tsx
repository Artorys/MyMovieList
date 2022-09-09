import { createContext, useState } from "react";
import { FieldValue } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IContext, IContextValues, ILoginData, IReponseLogin, IReponseRegister } from "../interfaces/Auth/AuthContextInterface";
import { apiFake } from "../services/api";

export const AuthContext = createContext<IContextValues>(
  {} as IContextValues
);

export function AuthProvider({ children }: IContext) {
  const [movie_id, setMovie_Id] = useState(90);
  const navigate = useNavigate()
  const login = (data: FieldValue<ILoginData>) => {
    toast.promise(apiFake
      .post("/login", data)
      .then((res: IReponseLogin) => {
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@idUser", res.data.user.id);
        localStorage.setItem("@nameUser", res.data.user.name);
        localStorage.setItem("@emailUser", res.data.user.email);
        localStorage.setItem("@avatarlUser", res.data.user.avatar!);
        navigate("/home")
      }),{
        pending: "Waiting...",
        success: "Successfully logged in",
        error: "Account does not exist"
      });
  };

  const registerUser = (data: FieldValue<IReponseRegister>) => {
    toast.promise(apiFake
      .post("/register", data)
      .then((res: IReponseRegister) => {
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@idUser", res.data.user.id);
        navigate("/home")
      })
      .catch((err) => {
        toast.error(err.response.data);
      }), {
        pending: "Waiting...",
        success: "Account created successfully",
        error: "Email already exists"
      });
  };

  return (
    <AuthContext.Provider value={{ login, registerUser, movie_id, setMovie_Id }}>
      {children}
    </AuthContext.Provider>
  );
}
