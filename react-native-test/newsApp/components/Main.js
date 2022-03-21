import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";
import {useState, useEffect} from 'react';
import getNews from './api/getNews';
import ListItem from './ListItem';

const Main = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("all");
  const [info, setInfo] = useState([]);
  const fetchNews = async (category) => {
    const details = await getNews(category);
    setInfo(details);
  };
  useEffect(() => {
    fetchNews(selectedValue);
  }, [selectedValue]);

  return (
    <SafeAreaView>
      <Center>
        <Box w="3/4" maxW="300">
          <Select
            selectedValue={selectedValue}
            minWidth="200"
            accessibilityLabel="Choose category"
            placeholder="Choose category"
            _selectedItem={{bg: "teal.600", endIcon: <CheckIcon size="5" />}}
            mt={1}
            onValueChange={itemValue => setSelectedValue(itemValue)}>
            <Select.Item label="All" value="all" />
            <Select.Item label="Business" value="business" />
            <Select.Item label="Sports" value="sports" />
            <Select.Item label="Politics" value="politics" />
            <Select.Item label="World" value="world" />
            <Select.Item label="Technology" value="technology" />
            <Select.Item label="Science" value="science" />
            <Select.Item label="Automobile" value="automobile" />
          </Select>
        </Box>
      </Center>
      {info && (
        <FlatList
          data={info}
          style={{marginTop: 20, marginBottom: 54}}
          renderItem={({item, key}) => (
            <ListItem el={item} key={String(key)} handleMoreInfo={() => navigation.navigate('FullInfo', item)}/>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Main;
