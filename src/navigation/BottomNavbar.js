import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Greeting from '../components/Greeting'

const AlbumsRoute = () => <Text>Albums</Text>;

const BottomNavbar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'general', title: 'General', icon: 'home' },
      { key: 'item2', title: 'item2' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      general: Greeting,
      item2: AlbumsRoute,
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