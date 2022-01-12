import App from '../App';

const buttonSwitch = () => {
  const container = document.createElement('div');
  const usdButton = document.createElement('button');
  usdButton.innerText = 'USD';
  const rubButton = document.createElement('button');
  rubButton.innerText = 'RUB';
  container.append(usdButton, rubButton);
  container.classList.add('buttonSwitch');
  const root = document.getElementById('root');
  usdButton.onclick = async () => {
    const usdLine = await App('usd');
    root.innerHTML = '';
    root.append(usdLine);
  };
  rubButton.onclick = async () => {
    const rubLine = await App('rub');
    root.innerHTML = '';
    root.append(rubLine);
  };

  return container;
};

export default buttonSwitch;
