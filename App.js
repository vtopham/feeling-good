import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from "./Components/Homepage"
import Entry from "./Components/Entry"
import {NativeRouter, Route, Link} from "react-router-native"

export default function App() {
  return (
    <>
    {/* <View style = {styles.container}>
      <Text>Hello there!</Text>
    </View> */}


    <NativeRouter>
      <View style={styles.container}>
        <View style = {styles.navigation}>
          <Link to = "/">
            <Text style = {styles.navText}>Go to homepage</Text>
          </Link>
          <Link to = "/entry">
            <Text style = {styles.navText}>Create a new entry</Text>
          </Link>
        </View>

        <Route exact path = "/" component = {Homepage} />
        <Route path = "/entry" component = {Entry} />
      </View>
      
    </NativeRouter>
    </>
    
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    
  },

  navigation: {
    backgroundColor: '#4285F4',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    color: '#ffffff',
    paddingBottom: 15,
    
  },
  navText: {
    color: '#ffffff',
    fontSize: 16
  }

});


