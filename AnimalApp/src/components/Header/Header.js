import query from '../../../AnimalApp';
import fishCard from '../AnimalCard/fishCard';
import fossilsCard from '../AnimalCard/fossilsCard';
import villagersCard from '../AnimalCard/villagersCard';
import fishAPI from '../APIquery/fishAPI';
import fossilsAPI from '../APIquery/fossilsAPI';
import villagersAPI from '../APIquery/villagersAPI';

const header = () => {
  const container = document.createElement('header');
  const fish = document.createElement('button');
  const seaCreatures = document.createElement('button');
  const bugs = document.createElement('button');
  const fossils = document.createElement('button');
  const villagers = document.createElement('button');
  fish.innerText = 'Fish';
  seaCreatures.innerText = 'Sea Creatures';
  bugs.innerText = 'Bugs';
  fossils.innerText = 'Fossils';
  villagers.innerText = 'Villagers';
  fish.onclick = () => query(fishAPI('fish'), fishCard);
  villagers.onclick = () => query(villagersAPI(), villagersCard);
  seaCreatures.onclick = () => query(fishAPI('sea'), fishCard);
  bugs.onclick = () => query(fishAPI('bugs'), fishCard);
  fossils.onclick = () => query(fossilsAPI(), fossilsCard);
  container.append(fish, seaCreatures, bugs, fossils, villagers);

  return container;
};

export default header;
