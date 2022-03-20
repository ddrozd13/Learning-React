import { StyleSheet, SafeAreaView, Platform, Button, ActionSheetIOS, FlatList, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useState, useEffect} from 'react';
import getNews from './api/getNews';
import ListItem from './ListItem';

const Main = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("all");
  const [info, setInfo] = useState([]);
  const onChange = () =>
  ActionSheetIOS.showActionSheetWithOptions({
      options: ["Cancel", "All", "Business", "Sports", "World", "Politics", "Technology", "Science", "Automobile"],
      cancelButtonIndex: 0,
      userInterfaceStyle: 'dark'
    },
    buttonIndex => {
      if (buttonIndex === 0) {
        // cancel action
      } else if (buttonIndex === 1) {
        setSelectedValue('all');
      } else if (buttonIndex === 2) {
        setSelectedValue('business');
      } else if (buttonIndex === 3) {
        setSelectedValue('sports');
      } else if (buttonIndex === 4) {
        setSelectedValue('world');
      } else if (buttonIndex === 5) {
        setSelectedValue('politics');
      } else if (buttonIndex === 6) {
        setSelectedValue('technology');
      } else if (buttonIndex === 7) {
        setSelectedValue('science');
      } else if (buttonIndex === 8) {
        setSelectedValue('automobile');
      }
    }
  );
  const fetchNews = async (category) => {
    const details = await getNews(category);

    setInfo(details);
  };

  useEffect(() => {
    fetchNews(selectedValue);
  }, [selectedValue]);

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS !== 'ios' && (
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Business" value="business" />
          <Picker.Item label="Sports" value="sports" />
          <Picker.Item label="World" value="world" />
          <Picker.Item label="Politics" value="politics" />
          <Picker.Item label="Technology" value="technology" />
          <Picker.Item label="Science" value="science" />
          <Picker.Item label="Automobile" value="automobile" />
        </Picker>
      )}
      {Platform.OS === 'ios' && (
        <View style={styles.picker}>
          <Button title={selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1,)} onPress={onChange} color="black" />
        </View>
      )}
      {info && (
        <FlatList data={info} style={{marginTop: 20}} renderItem={({item, key}) => (
          <ListItem el={item} handleMoreInfo={() => navigation.navigate('FullInfo', item)}/>
        )}
        keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  picker: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 14,
    backgroundColor: '#D4D4D8',
    shadowOpacity: 0.6,
    shadowRadius: 16,
    width: '80%'
  }
});

export default Main;
