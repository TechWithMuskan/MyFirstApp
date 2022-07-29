import React from 'react';
import {StatusBar} from 'react-native';
import Login from './components/atoms/login';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#3b5998" />
      <Login />
    </>
  );
};

export default App;
