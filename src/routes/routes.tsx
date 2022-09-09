import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ExtendList from "../pages/ExtendList";
import { MovieContextProvider } from "../context/moviePageContext";
import Home from "../pages/Home";
import LadingPage from "../pages/LadingPage";
import { LoginForm } from "../pages/LoginPage/login";
import { MoviePage } from "../pages/MoviePage";
import { RegisterForm } from "../pages/registerPage/register";
import { UserProfile } from "../pages/UserProfile/userProfile";
import { StremerComponent } from "../context/stremerPlataform";
import { TrendingContext, TrendingProvider } from "../context/TrendingContext";


export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/Movie" element={
      <MovieContextProvider>
          <MoviePage />
      </MovieContextProvider>
      }/>
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/" element={<TrendingProvider><LadingPage /></TrendingProvider>}></Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Route>
      <Route path="/extend/:group" element={<ExtendList />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}
