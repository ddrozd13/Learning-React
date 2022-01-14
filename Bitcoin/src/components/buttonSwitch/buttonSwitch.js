import './buttonSwitch.scss';

const buttonSwitch = () => {
  const container = document.createElement('div');
  const usdButton = document.createElement('button');
  usdButton.innerText = 'USD';
  usdButton.setAttribute('dataset', 'usd');
  const rubButton = document.createElement('button');
  rubButton.innerText = 'RUB';
  rubButton.setAttribute('dataset', 'rub');
  container.append(usdButton, rubButton);
  container.classList.add('buttonSwitch');

  return container;
};

export default buttonSwitch;
