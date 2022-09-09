import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { FormContainer } from "../../style/FormStyles/FormContainer";
import { LoginInputContainer } from "../../style/FormStyles/LoginInput";

import { AuthContext } from "../../context/authContext";
import { GlobalButton, HoverButton } from "../../style/global/GlobalButton";
import { BiEnvelope, BiKey } from 'react-icons/bi'

import  loginSVG  from '../../style/images/loginSVG.svg'

import { useNavigate } from "react-router-dom";


export function LoginForm() {
  const navigate = useNavigate()
  
  if(window.localStorage.getItem("@Token") !== undefined || window.localStorage.getItem("@Token") !== null){
    navigate("/home")
  }
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const { login } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <FormContainer formHeight="250px">
      <img src={loginSVG} alt="ticket icon"/>
      <form onSubmit={handleSubmit(login)}>
        <LoginInputContainer>
          <BiEnvelope/>
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            id="email"
          />
        </LoginInputContainer>
        
        <span>
          <>{errors.email?.message}</>
        </span>

        <LoginInputContainer>
          <BiKey/>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            id="password"
          />
        </LoginInputContainer>
        
        <span>
          <>{errors.password?.message}</>
        </span>

        <HoverButton 
          width={'53%'} 
          maxWidth={'209px'} 
          type="submit"
          height="18%"
          maxHeight="52px"
        >
          Login
        </HoverButton>
      </form>

      <p>
        Don't have an account yet?
        <GlobalButton width='fit-content' backGroundColor='transparent' color="#E89005" onClick={() => navigate('/register')}>Sign up</GlobalButton>
      </p>
    </FormContainer>

    
  );
}
