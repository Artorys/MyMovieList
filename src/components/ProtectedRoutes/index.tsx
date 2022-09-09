import { Navigate, Outlet, useLocation } from "react-router-dom";



export default function ProtectedRoutes() {

    const location = useLocation();   

    return localStorage.getItem('@idUser')? (
        <Outlet />
    ) :
    (

       <Navigate to="/login" replace state={{ from: location}} /> 
    )
}
