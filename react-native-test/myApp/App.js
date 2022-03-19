import { View, StyleSheet, FlatList, Text } from 'react-native';
import {useState} from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';


const App = () => {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Помыть машину', key: '2'},
    {text: 'Купить картошку', key: '3'},
    {text: 'Стать миллионером', key: '4'},
  ]);
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list,
      ]
    });
  };
  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(item => item.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
};

export default App;
