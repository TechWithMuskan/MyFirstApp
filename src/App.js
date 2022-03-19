import React from 'react';
import {StatusBar} from 'react-native';
import FlatListExample from './components/organisms/flatListExample';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#253439" />
      <FlatListExample />
    </>
  );
};

export default App;
