import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const response = await fetch('http://localhost:5000/allusers');
  const data = await response.json();
  return data;
};

const useUsers = () => {
  const { data: users, refetch } = useQuery('users', fetchUsers);
  return { users, refetch };
};

export default useUsers;
