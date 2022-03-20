import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

const ListItem = ({ el, handleMoreInfo }) => {
  return (
    <View>
      <Image source={{
        uri: `${el.imageUrl}`,
      }}
      style={{
        height: 200,
        width: '100%',
      }}
      resizeMode='cover'
      />
      <Text style={styles.text}>{el.author}</Text>
      <Text style={styles.text}>{el.title}</Text>
      <Text style={styles.text}>{el.date} {el.time}</Text>
      <Button
        title="Learn more"
        style={styles.button}
        onPress={handleMoreInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    color: 'blue',
    padding: 10,
    marginTop: 10,
  },
});

export default ListItem;
