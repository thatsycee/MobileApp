import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhr0zELm_Cehi0PL97YAEbLaqzNa_C0GqBMg&s' }}
        style={styles.image}/>

      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.text}>
        {name === '' ? "Please enter your name" : `Hello, ${name}!`}
      </Text>    

      <Text style={styles.text}>{message}</Text>

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#bcde7d'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#f5a3dd',
  },
  input: {
    borderWidth: 1,
    width: '60%',
    padding: 10,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: '60%'
  }
  });