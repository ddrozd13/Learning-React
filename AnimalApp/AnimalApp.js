import fishCard from "./src/components/AnimalCard/fishCard";
import fishAPI from "./src/components/APIquery/fishAPI";
import App from "./src/components/App";
import header from "./src/components/Header/Header";
import inputSearch from "./src/components/Search/inputSearch";

(async () => {
  const app = await App(fishAPI('http://acnhapi.com/v1/fish'), fishCard);
  const wrapper = document.getElementById('wrapper');
  wrapper.append(app);
})();
const query = async (api, card) => {
  const app = await App(api, card);
  const wrapper = document.getElementById('wrapper');
  wrapper.removeChild(wrapper.lastChild);
  wrapper.append(app);
};
const searchContainer = inputSearch();
wrapper.prepend(searchContainer);
const header1 = header();
wrapper.prepend(header1);

export default query;