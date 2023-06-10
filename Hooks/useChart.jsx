import { useQuery } from 'react-query';

const fetchChart = async () => {
  const response = await fetch('http://localhost:5000/mybookmarkAll');
  const data = await response.json();
  return data;
};

const useChart = () => {
  const { data: Chart, refetch } = useQuery('Chart', fetchChart);
  return { Chart, refetch };
};

export default useChart;