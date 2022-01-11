import nativeToast, { success } from 'native-toast';

const fishCard = (props) => {
  const container = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const name = document.createElement('p');
  const location = document.createElement('p');
  const catchPhrase = document.createElement('p');
  const museumPhrase = document.createElement('p');
  const button = document.createElement('button');
  const price = document.createElement('p');
  img.src = props.src;
  name.setAttribute('name', '');
  button.innerText = 'Price';
  name.innerHTML = `<span>Name:  </span> ${props.name}`;
  location.innerHTML = `<span>Availability:  </span> ${props.location}`;
  catchPhrase.innerHTML = `<span>Catch-phrase:  </span> ${props.catchPhrase}`;
  museumPhrase.innerHTML = `<span>Museum-phrase:  </span> ${props.museumPhrase}`;
  div.append(name, location, catchPhrase, museumPhrase, price);
  container.append(img, div, button);
  container.classList.add('card');
  button.classList.add('card-buttons');
  button.onclick = () => {
    nativeToast({
      type: 'success',
      position: 'east',
      timeout: 3000,
      message: `Price: ${props.price}`,
    });
  };
  return container;
}

export default fishCard;