import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const response = await fetch('https://ass-12-server-mu.vercel.app/allusers');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data;
};

const useUsers = () => {
  const { data: users, refetch, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) {
    return { users: [], refetch, error, isLoading };
  }

  return { users, refetch, error, isLoading };
};

export default useUsers;
