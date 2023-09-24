import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useUsers from "../../../Hooks/useUsers";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  console.log(User);
  const { users } = useUsers();
  const activeUserEmail = User?.email;
  const findUser = users?.find((user) => user?.email === activeUserEmail);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col justify-center items-center text-red-700">
        <progress className="progress  w-56"></progress>
      </div>
    );
  }
  if (User && !findUser?.role) {
    return children;
  }
  if (User && findUser?.role) {
    return <Navigate to="/" />;
  } else {
    return (
      <Navigate
        state={{ from: location }}
        to={"/login"}
        replace={true}
      ></Navigate>
    );
  }
};

export default PrivateRoute;
