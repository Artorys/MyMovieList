import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/authContext";

import { FormContainer } from "../../style/FormStyles/FormContainer";
import { GlobalButton } from "../../style/global/GlobalButton";
import { LoginInputContainer } from "../../style/FormStyles/LoginInput";
import registerSVG from '../../style/images/registerSVG.svg'
import { AiOutlinePicture } from 'react-icons/ai'
import { BiEnvelope, BiKey } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from "react-router-dom";


export function RegisterForm() {

  const navigate = useNavigate()

  const formSchema = yup.object().shape({
    name: yup.string().required("Mandatory name"),
    email: yup.string().required("Mandatory email").email("Invalid email"),
    password: yup.string()
    .required("Password required")
    .min(8, "Must contain 8 digits")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain 8 characters, uppercase or lowercase, a number and a special character"
    ),
    confirm_password: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
    avatar: yup.string(),
  });

  const { registerUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <FormContainer formHeight="470px">
      <img src={registerSVG} alt="" />
      <form onSubmit={handleSubmit(registerUser)}>

        <LoginInputContainer>
          <CgProfile/>
          <input
            type="text"
            {...register("name")}
            placeholder="name"
            id="name"
          />
        </LoginInputContainer>

        <span>
          <>{errors.name?.message}</>
        </span>

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

        <LoginInputContainer>
        <BiKey/>
          <input
            type="password"
            {...register("confirm_password")}
            placeholder="Confirm password"
            id="confirm_password"
          />
        </LoginInputContainer>

        <span>
          <>{errors.confirm_password?.message}</>
        </span>

        <LoginInputContainer>
        <AiOutlinePicture/>
          <input
            type="text"
            {...register("avatar")}
            placeholder="Profile picture"
            id="avatar"
          />
        </LoginInputContainer>
        
        <span>
          <>{errors.avatar?.message}</>
        </span>
        <GlobalButton 
          width={'53%'} 
          maxWidth={'209px'} 
          type="submit"
          height="18%"
          maxHeight="52px"
        >
          Sign up
        </GlobalButton>
      </form>

      <p>
        Already have an account?
        <GlobalButton width='fit-content' backGroundColor='transparent' color="#E89005" onClick={() => navigate('/login')}>Login</GlobalButton>
      </p>

    </FormContainer>
  );
}