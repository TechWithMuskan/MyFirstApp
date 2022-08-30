import React from 'react';
import {StatusBar} from 'react-native';
import Camera from './screens/datePickerModal';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#233f49" />
      <Camera />
    </>
  );
};

export default App;
