import { StyleSheet, View, Text } from 'react-native';
import gStyle from '../styles/style';

const Contacts = ({ route }) => {

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default Contacts;
