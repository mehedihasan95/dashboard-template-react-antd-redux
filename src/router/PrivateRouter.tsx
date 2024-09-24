import { Navigate, useLocation } from "react-router-dom";
import { AuthState } from "../app/features/authSlice";
import { useAppSelector } from "../app/store";
import { useGetProfileQuery } from "../modules/Setup/api/profileEndpoint";

interface Props {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<Props> = ({ children }) => {
  const { token } = useAppSelector(AuthState);
  const { isLoading, isSuccess } = useGetProfileQuery();
  const location = useLocation();

  if (isLoading) {
    return <>loading.....</>;
  } else if (isSuccess && token) {
    return children;
  } else {
    return <Navigate to='/auth/login' state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
