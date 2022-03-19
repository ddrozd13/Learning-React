import React, {useState} from 'react';
import {  TextInput, Button, StyleSheet, Text, View } from 'react-native';


const Form = ({ addHandler }) => {
  const [text, setText] = useState()
  const onChange = (text) => {
    setText(text);
  };

  return (
    <View style={styles.main}>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу..."/>
      <Button color="green" onPress={() => addHandler(text)} title="Добавить задачу" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    padding: 10,
    borderBottomWidth: 1,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%'
  }
});

export default Form;