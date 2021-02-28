import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
   
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }


});

export default function App() {
 const [people,setPeople] = useState([
   { name: "shaun", key: "1"},
   { name: "yoshi", key: "2"},
   { name: "berat", key: "3"},
   { name: "shaun2", key: "4"},
   { name: "yoshi2", key: "5"},
   { name: "berat2", key: "6"},
   { name: "shaun3", key: "7"},
   { name: "yoshi3", key: "8"},
   { name: "berat3", key: "9"},
 ]);
  return( 
    // map maps on every item in the array. as parameter we do not have to use item. It is automatically set.
    <View style= {styles.container} > 
      <ScrollView>
        {people.map((item) => {
          return (
              <View key = {item.key}>
                <Text style = {styles.item}> {item.name} </Text>
                </View>
          )
        })}
        </ScrollView>
    </View>
     
    // here
  );
}


