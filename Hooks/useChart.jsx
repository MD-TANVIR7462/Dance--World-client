import { useQuery } from 'react-query';

const fetchChart = async () => {
  const response = await fetch('https://ass-12-server-mu.vercel.app/mybookmarkAll');
  const data = await response.json();
  return data;
};

const useChart = () => {
  const { data: Chart, refetch } = useQuery('Chart', fetchChart);
  return { Chart, refetch };
};

export default useChart;