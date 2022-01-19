import CardList from "./components/CardList/CardList";
import getPhotos from "./components/getPhotos/getPhotos";

const App = async () => {
  const container = document.createElement('div');
  const cardList = CardList({
    cards: await getPhotos(),
  });
  container.append(cardList);

  return container;
};

export default App;
