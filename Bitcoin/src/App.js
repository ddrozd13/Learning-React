import getBitcoinData from './apis/getBitcoinData';
import Dropdown from './components/Dropdown/Dropdown';
import LineChart from './components/LineChart/LineChart';
import buttonSwitch from './components/buttonSwitch/buttonSwitch';

const createChart = async (currency) => {
  const data = await getBitcoinData(currency);
  const lineChart = LineChart({ data: data.prices });

  return lineChart;
};

const App = async () => {
  const container = document.createElement('div');
  let lineChart = await createChart();
  const btn = buttonSwitch();
  const dropDown = Dropdown();
  dropDown.onchange = async (event) => {
    const currency = event.target.selectedOptions[0].value;
    container.removeChild(lineChart);
    lineChart = await createChart(currency);
    container.append(lineChart);
  };
  const rubButton = btn.querySelector('button[dataset="rub"]');
  const usdButton = btn.querySelector('button[dataset="usd"]');
  rubButton.onclick = async () => {
    container.removeChild(lineChart);
    lineChart = await createChart('rub');
    container.append(lineChart);
  };
  usdButton.onclick = async () => {
    container.removeChild(lineChart);
    lineChart = await createChart();
    container.append(lineChart);
  };

  container.append(btn, dropDown, lineChart);

  return container;
};

export default App;
