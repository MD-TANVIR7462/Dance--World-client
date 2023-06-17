
import { FaUserEdit, FaUserGraduate } from 'react-icons/fa';
import useUsers from '../../../../Hooks/useUsers';

const MenageUser = () => {
const { users, refetch } = useUsers();


const HandleInstractor = (id) => {
   
  fetch(`https://ass-12-server-mu.vercel.app/allusers/instructor/${id}`,{
    method : 'PATCH'
 })
 .then(res=>res.json())
 .then(data=>{
  
    refetch()
   
 })
  
}
const HandleAdmin = (id) => {
   
   fetch(`https://ass-12-server-mu.vercel.app/allusers/admin/${id}`,{
      method : 'PATCH'
   })
   .then(res=>res.json())
   .then(data=>{
    
      refetch()
     
   })
}

  return (
    // <div className="min-h-screen  flex items-center justify-center  ">
      <div className="w-full md:w-5/5  bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 className='text-4xl font-bold text-center my-10'>Users !!</h2>
        <div className="overflow-x-auto">
          <table className="table mx-auto mb-10">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Make Instructor</th>
                <th>Make Admin</th>
                
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <th><img src={user.image} className='w-20 rounded-xl ' alt="" /></th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role ? user.role  : 'Student'}</td>
                  <td>
                  <button onClick={()=>HandleInstractor(user._id)} className="btn btn-success  btn-md text-xl text-white font-bold hover:bg-emerald-900" 
                  disabled={user?.role==='instructor' || user?.role==='admin'}
                  >
                  <FaUserEdit/>
                    </button>
                  </td>
                  <td>
                    <button onClick={()=>HandleAdmin(user._id)} className="btn btn-warning  btn-md text-lg text-white font-bold hover:bg-red-700 transition-all"
                     disabled={user?.role==='admin'}
                     >
                     <span>
                    <FaUserGraduate/>
                     </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    // </div>
  );
};

export default MenageUser;


