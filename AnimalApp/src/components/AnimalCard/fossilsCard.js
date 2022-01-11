import nativeToast from 'native-toast';

const fossilsCard = (props) => {
  const container = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const name = document.createElement('p');
  const museumPhrase = document.createElement('p');
  const button = document.createElement('button');
  const price = document.createElement('p');
  img.src = props.src;
  name.setAttribute('name', '');
  button.innerText = 'Price';
  name.innerHTML = `<span>Name:  </span> ${props.name}`;
  museumPhrase.innerHTML = `<span>Museum-phrase:  </span> ${props.museumPhrase}`;
  div.append(name, museumPhrase, price);
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
};

export default fossilsCard;
