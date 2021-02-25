import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [name,setName] = useState('SHAUN');
  const [person,setPerson] = useState({name: "mario",age:40}) // we can also pass objects

  const clickHandler = () => {
    setName("chun-li");
    setPerson({name:"luigi", age: 45});
  }

  return (
    
  
    <View style={styles.container}>
    
    <Text>My name is {name}</Text>
    <Text>His name is {person.name} and his age is {person.age}</Text>
    <View style = {styles.buttonContainer}>
      <Button title = "update state" onPress={clickHandler}/>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems : "center",
    justifyContent: "center",

    
  },
  buttonContainer:{
    marginTop: 20,
  }
  /*
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText:{
    fontWeight: "bold",
  },
  body:{
    backgroundColor: "yellow",
    padding: 20,
    fontWeight: "bold",
  }
  */
 

});
