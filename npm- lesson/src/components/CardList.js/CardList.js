import Card from '../Card/Card';

const CardList = (props) => {
  const container = document.createElement('div');
  const cardElements = props.cards.map((card) => Card(card));
  container.append(...cardElements);
  container.classList.add('cards');
  return container;
};

export default CardList;
