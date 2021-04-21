import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BottomNavbar  from './src/navigation/BottomNavbar';

export default function App() {

  return (
    <View style={styles.container}>
      
      <BottomNavbar/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

