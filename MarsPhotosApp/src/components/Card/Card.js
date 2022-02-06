import './Card.scss';

const Card = (props) => {
  const container = document.createElement('div');
  const title = document.createElement('h2');
  title.innerText = props.title;
  const img = document.createElement('img');
  img.src = props.src;
  container.append(title, img);
  container.classList.add('card');

  return container;
};

export default Card;
