const villagersAPI = async () => {
  const response = await fetch('http://acnhapi.com/v1/villagers');
  const data = await response.json();
  const values = Object.values(data);
  return values.map((item) => {
    const name = Object.values(item.name);
    return {
      src: item.image_uri,
      name: name[0].charAt(0).toUpperCase() + name[0].slice(1),
      saying: item.saying,
      gender: item.gender,
      species: item.species,
      personality: item.personality,
      birthdayString: item['birthday-string'],
    };
  });
};

export default villagersAPI;