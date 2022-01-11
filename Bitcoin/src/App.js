import getBitcoinData from './apis/getBitcoinData';
import LineChart from './components/LineChart';

const App = async () => {
  const container = document.createElement('div');
  const data = await getBitcoinData();
  const lineChart = LineChart({ data: data.prices });
  container.append(lineChart);

  return container;
};

export default App;
