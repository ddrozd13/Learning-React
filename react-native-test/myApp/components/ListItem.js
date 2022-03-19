import React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

const ListItem = ({ el, deleteHandler }) => {
  return (
    <TouchableHighlight onPress={() => deleteHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
    borderRadius: 5,
    textAlign: 'center',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%',
  },
});

export default ListItem;