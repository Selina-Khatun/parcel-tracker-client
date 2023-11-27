
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location=useLocation();
    // console.log(location.pathname)
    // console.log(user);
if (loading) {
    return <>
        <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
                <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
            </div>
        </div>
    </>
}
if (user) {
    return children;

}

return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;