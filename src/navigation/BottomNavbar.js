import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Greeting from '../components/Greeting'
import DrawingViewController from '../components/DrawingViewController'
import * as ScreenOrientation from 'expo-screen-orientation'

const BottomNavbar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'general', title: 'General', icon: 'home' },
      { key: 'drawing', title: 'Drawing',  icon: 'pencil' },
    ]);

    ScreenOrientation.unlockAsync()

    const renderScene = BottomNavigation.SceneMap({
      general: Greeting,
      drawing: DrawingViewController,
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