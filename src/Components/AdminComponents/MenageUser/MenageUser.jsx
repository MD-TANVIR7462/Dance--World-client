import React, { useEffect, useState } from 'react';
import useUsers from '../../../../Hooks/useUsers';

const MenageUser = () => {
const { users, refetch } = useUsers();


const HandleInstractor = (id) => {
   
   fetch(`http://localhost:5000/allusers/instractor/${id}`,{
      method : 'PATCH'
   })
   .then(res=>res.json())
   .then(data=>{
      console.log(data)
      refetch()
     
   })
}
const HandleAdmin = (id) => {
   
   fetch(`http://localhost:5000/allusers/admin/${id}`,{
      method : 'PATCH'
   })
   .then(res=>res.json())
   .then(data=>{
      console.log(data)
      refetch()
     
   })
}

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-b from-pink-400 to-white ">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table mx-auto my-10">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role ? user.role : 'Student'}</td>
                  <td>
                  <button onClick={()=>HandleInstractor(user._id)} className="btn btn-warning  btn-sm text-white font-bold hover:bg-green-700 transition-all" disabled={user?.role==='instractor' || user?.role==='admin'}>
                    Make Instractor
                    </button>
                  </td>
                  <td>
                    <button onClick={()=>HandleAdmin(user._id)} className="btn btn-warning  btn-sm text-white font-bold hover:bg-red-700 transition-all" disabled={user?.role==='admin'}>
                     <span>
                     {
                        user?.role === 'admin'? 'alredy Admin' : 'Make Admin'
 
                     }
                     </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenageUser;


