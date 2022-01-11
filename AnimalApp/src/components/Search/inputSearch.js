const inputSearch = () => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  input.placeholder = 'Enter name to search...';
  input.oninput = () => {
    const val = input.value.trim().toLowerCase();
    const elements = document.querySelectorAll('p[name]');
    if (val !== '') {
      elements.forEach((item) => {
        if (item.innerText.toLowerCase().search(val) === -1) {
          item.closest('.card').classList.add('hidden');
        } else {
          item.closest('.card').classList.remove('hidden');
        }
      });
    } else {
      elements.forEach((item) => {
        item.closest('.card').classList.remove('hidden');
      });
    }
  };
  container.append(input);
  container.classList.add('search');

  return container;
};

export default inputSearch;
