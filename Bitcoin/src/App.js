import getBitcoinData from './apis/getBitcoinData';
import LineChart from './components/LineChart';

const App = async (api) => {
  const container = document.createElement('div');
  const data = await getBitcoinData(api);
  const lineChart = LineChart({ data: data.prices });
  container.append(lineChart);

  return container;
};

export default App;
