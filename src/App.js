import React from 'react';
import {StatusBar, View} from 'react-native';
import SectionListExample from './components/organisms/sectionListExample';

const App = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#1C2539',
      }}>
      <StatusBar backgroundColor="#1C2539" />
      <SectionListExample />
    </View>
  );
};

export default App;
