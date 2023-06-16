import React, { useContext } from 'react';
import useUsers from './useUsers';
import { AuthContext } from '../src/Components/Provider/AuthProvider';

const UseRole = () => {
   const {users} = useUsers()
   const { User } = useContext(AuthContext)

 
   const activeUserEmail = User?.email
   const findUser = users?.find(user => user?.email === activeUserEmail)
   return (
     { findUser }
   );
};

export default UseRole;

