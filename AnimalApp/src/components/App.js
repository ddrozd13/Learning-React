import AnimalCardList from "./AnimalCard/AnimalCardList";

const loader = document.querySelector('.loader');
const App = async (API, card) => {
  loader.classList.remove('hidden');
  const wrapper = document.getElementById('wrapper');
  wrapper.lastChild.classList?.add('hidden')
  try{
    const container = document.createElement('div');
    const animalList = AnimalCardList({
      items: await API
    }, card);
    container.append(animalList);
    return container;
  } catch {
    alert('Oops, Something Went Wrong');
  } finally {
    loader.classList.add('hidden');
    wrapper.lastChild.classList?.remove('hidden');
  };
};

export default App;

