const AnimalCardList = (props, str) => {
  const container = document.createElement('div');
  const cardItems = props.items.map((item) => str(item));
  container.append(...cardItems);
  container.classList.add('cardList');

  return container;
};

export default AnimalCardList;
