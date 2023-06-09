import { useQuery } from 'react-query';

const fetchClass = async () => {
  const response = await fetch('http://localhost:5000/instractorclass');
  const data = await response.json();
  return data;
};

const useinsClass = () => {
  const { data: classes, refetch } = useQuery('class', fetchClass);
  return { classes, refetch };
};

export default useinsClass;