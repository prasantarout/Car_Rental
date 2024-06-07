import React, {useEffect} from 'react';
import {Text, TextInput} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StackNav from './src/navigators/StackNav';

export default function App() {
  useEffect(() => {
    if (Text.defaultProps) {
      Text.defaultProps.allowFontScaling = false;
    } else {
      Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
    }

    // Override Text scaling in input fields
    if (TextInput.defaultProps) {
      TextInput.defaultProps.allowFontScaling = false;
    } else {
      TextInput.defaultProps = {};
      TextInput.defaultProps.allowFontScaling = false;
    }
  }, []);
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <StackNav />
      </GestureHandlerRootView>
    </>
  );
}
