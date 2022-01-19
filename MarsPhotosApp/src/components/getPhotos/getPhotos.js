import axios from 'axios';

const getPhotos =async () => {
  const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=CQ6iwhP4LmlkMzFDyzEJc5cbBvIkD42w0dNsel5a');

  return response.data.photos.map((item) => ({
    src: item.img_src,
    title: Object.values(item.camera)[3],
  }));
};

export default getPhotos;
