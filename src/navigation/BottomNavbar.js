import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Greeting from '../components/Greeting'
import Lab2 from '../components/Lab2'

const BottomNavbar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'general', title: 'General', icon: 'home' },
      { key: 'lab2', title: 'CoordinateVM',  icon: 'dog' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      general: Greeting,
      lab2: Lab2,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };

export default BottomNavbar