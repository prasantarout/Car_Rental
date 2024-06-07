/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {Keyboard, Platform} from 'react-native';
// import {Keyboard, Dimensions} from 'react-native';

// const useKeyboardHeight = () => {
//   const [keyboardHeight, setKeyboardHeight] = useState(0);

//   useEffect(() => {
//     const updateKeyboardHeight = event => {
//       let screenHeight = Dimensions.get('window').height;
//       let tempKeyboardHeight = event.endCoordinates
//         ? screenHeight - event.endCoordinates.screenY
//         : 0;
//       setKeyboardHeight(tempKeyboardHeight);
//     };

//     Keyboard.addListener('keyboardDidShow', updateKeyboardHeight);
//     Keyboard.addListener('keyboardDidHide', () => setKeyboardHeight(0));
//     console.log('keyboard', Keyboard);

//     return () => {
//       Keyboard.removeAllListeners('keyboardDidShow');
//       Keyboard.removeAllListeners('keyboardDidHide');
//     };
//   }, []);

//   return keyboardHeight;
// };

// export default useKeyboardHeight;

const useKeyboardHeight = (platforms = ['ios', 'android']) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    if (isEventRequired(platforms)) {
      Keyboard.addListener('keyboardDidShow', keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', keyboardDidHide);

      return () => {
        Keyboard.removeAllListeners('keyboardDidShow');
        Keyboard.removeAllListeners('keyboardDidHide');
      };
    } else {
      return () => {};
    }
  }, []);

  const isEventRequired = platform => {
    try {
      return (
        platform?.map(p => p?.toLowerCase()).indexOf(Platform.OS) !== -1 ||
        !platform
      );
    } catch (ex) {}

    return false;
  };

  const keyboardDidShow = frames => {
    setKeyboardHeight(frames.endCoordinates.height);
  };

  const keyboardDidHide = () => {
    setKeyboardHeight(0);
  };

  return keyboardHeight;
};

export default useKeyboardHeight;
