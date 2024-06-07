import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import Modal from 'react-native-modal';
import css, {height, width} from '../../themes/Css';
import normalize from '../../utils/helpers/dimen';
import Txt from '../micro/Txt';
import Icons from '../../themes/Icons';

const BottomSheet = props => {
  const {isVisible, children, title, onClose, titleStyle, closebtn} = props;

  return (
    <>
      <Modal
        isVisible={isVisible}
        style={[css.m0]}
        deviceHeight={height}
        deviceWidth={width}
        propagateSwipe={true}
        avoidKeyboard={true}>
        <View
          style={[styles.bottomSheetStyle, css.p16]}
          onStartShouldSetResponder={() => Keyboard.dismiss()}>
          <View style={[css.rowBetween, css.aic, css.z49]}>
            {title ? (
              <Txt style={[css.fs17, css.roboto_Bold, titleStyle]}>{title}</Txt>
            ) : null}
            <TouchableOpacity onPress={onClose} style={[styles.closeBtn]}>
              <Image
                source={Icons.closeIcon}
                style={[css.imgResponsive, closebtn]}
              />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetStyle: {
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    width: width,
    minHeight: normalize(100),
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: normalize(30),
    height: normalize(30),
    padding: normalize(8),
    zIndex: 999,
  },
});

export default BottomSheet;
