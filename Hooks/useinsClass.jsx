import { useQuery } from 'react-query';

const fetchClass = async () => {
  const response = await fetch('https://ass-12-server-mu.vercel.app/instractorclass');
  const data = await response.json();
  return data;
};

const useinsClass = () => {
  const { data: classes, refetch } = useQuery('class', fetchClass);
  return { classes, refetch };
};

export default useinsClass;