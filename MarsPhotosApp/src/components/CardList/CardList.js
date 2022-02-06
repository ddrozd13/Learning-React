import Card from '../Card/Card';
import './CardList.scss';

const CardList = (props) => {
  const container = document.createElement('div');
  const cardItem = props.cards.map((item) => Card(item));
  container.append(...cardItem);
  container.classList.add('cards');

  return container;
};

export default CardList;
