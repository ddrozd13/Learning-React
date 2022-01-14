import Currencies from '../constants/Currencies';
import './Dropdown.scss';

const Dropdown = () => {
  const container = document.createElement('select');
  const optionUsd = document.createElement('option');
  optionUsd.innerText = 'Baksi $$';
  optionUsd.value = Currencies.AmericanDollars;
  optionUsd.selected = '';
  const optionRub = document.createElement('option');
  optionRub.innerText = 'Rubliki';
  optionRub.value = Currencies.Rubles;
  container.append(optionUsd, optionRub);

  return container;
};

export default Dropdown;
