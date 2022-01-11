const fossilsAPI = async () => {
  const response = await fetch('http://acnhapi.com/v1/fossils');
  const data = await response.json();
  const values = Object.values(data);
  return values.map((item) => {
    const name = Object.values(item.name);
    return {
      src: item.image_uri,
      name: name[0].charAt(0).toUpperCase() + name[0].slice(1),
      museumPhrase: item['museum-phrase'],
      price: item.price,
    };
  });
};

export default fossilsAPI;