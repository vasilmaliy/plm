import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Greeting from './'

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNavbar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      music: Greeting,
      albums: AlbumsRoute,
      recents: RecentsRoute,
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