import React from 'react';
import {StatusBar} from 'react-native';
import AsyncStore from './screens/asyncStore';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#233f49" />
      <AsyncStore />
    </>
  );
};

export default App;
