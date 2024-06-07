import {Keyboard, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import css from '../../themes/Css';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SafeView = props => {
  return (
    <SafeAreaView
      style={[
        css.f1,
        css.bgWhite,
        {
          width: props.width,
          alignSelf: props.alignSelf,
          marginHorizontal: props.marginHorizontal,
        },
      ]}>
      <View style={[css.f1, css.bgWhite]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.safeView]}
          nestedScrollEnabled={true}
          contentContainerStyle={[css.fg1]}
          bounces={false}
          onStartShouldSetResponder={() => Keyboard.dismiss()}>
          {props.children}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});
