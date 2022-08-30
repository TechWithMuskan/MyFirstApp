import React from 'react';
import {StatusBar} from 'react-native';
import DatePickerModal from './screens/datePickerModal';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#233f49" />
      <DatePickerModal />
    </>
  );
};

export default App;
