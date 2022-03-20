import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import gStyle from '../styles/style';

const FullInfo = ({ route }) => {
  return (
    <View style={gStyle.main}>
      <Image source={{
        uri: `${route.params.imageUrl}`
      }}
      style={{width: '100%', height: 300}}
      />
      <Text style={gStyle.title}>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default FullInfo;
