const villagersCard = (props) => {
  const container = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const name = document.createElement('p');
  const saying = document.createElement('p');
  const gender = document.createElement('p');
  const species = document.createElement('p');
  const personality = document.createElement('p');
  const birthdayString = document.createElement('p');
  img.src = props.src;
  name.setAttribute('name', '');
  name.innerHTML = `<span>Name:  </span> ${props.name}`;
  saying.innerHTML = `<span>Saying:  </span> ${props.saying}`;
  gender.innerHTML = `<span>Gender:  </span> ${props.gender}`;
  species.innerHTML = `<span>Species:  </span> ${props.species}`;
  personality.innerHTML = `<span>Personality:  </span> ${props.personality}`;
  birthdayString.innerHTML = `<span>Birthday-string:  </span> ${props.birthdayString}`;
  div.append(name, gender, species, personality, birthdayString, saying);
  container.append(img, div);
  container.classList.add('card');
  return container;
}

export default villagersCard;