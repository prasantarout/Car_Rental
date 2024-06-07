import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import normalize from '../../utils/helpers/dimen';
import PropTypes from 'prop-types';
import {Colors, Fonts} from '../../themes/Theme';

export default function HomeItem1component(props) {
  const styles = customStyles(props);

  function onChangeText(text) {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }
  function rightimagepress() {
    if (props.rightimagepress) {
      props.rightimagepress();
    }
  }

  function onFocus() {
    if (props.onFocus) {
      props.onFocus();
    }
  }
  function onBlur() {
    if (props.onBlur) {
      props.onBlur();
    }
  }

  return (
    <>
      {props?.topsection && (
        <View style={styles.mainContainer}>
          <Text style={styles.headerText}>{props?.toplefttxt}</Text>
          <TouchableOpacity onPress={props?.onPressCategoryViewAll}>
            <Text style={styles.viewAllText}>{props?.toprighttxt}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.scrollableContainer}
          numColumns={props?.numColumns}
          data={props?.data}
          renderItem={({item, index}) => renderItem({item, index, props})}
          horizontal={props?.horizontal}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={props?.scrollEnabled || true}
          nestedScrollEnabled={true}
        />
      </View>
    </>
  );
}

const renderItem = ({item, index, props}) => {
  const styles = customStyles(props);
  return (
    <View
      style={[
        styles.itemContainer,
        {
          marginLeft: props?.topsection
            ? normalize(10)
            : index % 3 === 0
            ? 0
            : normalize(10),
        },
      ]}>
      <Image source={item?.icon} style={styles.itemImage} />
      <Text style={styles.itemName}>{item?.name}</Text>
      {item?.total ? <Text style={styles.itemData}>{item?.total}</Text> : null}
    </View>
  );
};

HomeItem1component.propTypes = {
  marginTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  data: PropTypes.array,
  topsection: PropTypes.bool,
  toplefttxt: PropTypes.string,
  toprighttxt: PropTypes.string,
  margintopview: PropTypes.number,
};

HomeItem1component.defaultProps = {
  horizontal: false,
  data: [],
  topsection: false,
  margintopview: normalize(20),
};

const customStyles = props =>
  StyleSheet.create({
    flatlistContainer: {
      width: '100%',
      flex: 1,
      padding: normalize(10),
    },
    mainContainer: {
      width: '92%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginTop: props?.margintopview,
      alignItems: 'center',
    },
    headerText: {
      fontFamily: Fonts.Roboto_Medium,
      fontSize: normalize(14),
      color: Colors.txtblack,
    },
    viewAllText: {
      color: Colors.pink,
      fontSize: normalize(12),
      fontFamily: Fonts.Roboto_Medium,
      textDecorationLine: 'underline',
      textDecorationColor: Colors.pink,
    },
    scrollableContainer: {
      alignSelf: 'center',
      paddingHorizontal: '2%',
    },
    itemContainer: {
      width: Dimensions.get('screen').width / 3 - normalize(20),
      height: normalize(95),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#9E4DB6',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      marginVertical: normalize(4),
    },
    itemImage: {
      width: normalize(35),
      height: normalize(35),
      resizeMode: 'contain',
      marginBottom: normalize(5),
    },
    itemName: {
      color: '#0B0B0B',
      fontFamily: Fonts.Roboto_Medium,
      fontSize: normalize(11),
    },
    itemData: {
      color: '#B5B5B5',
      fontFamily: Fonts.Roboto_Medium,
      fontSize: normalize(10),
    },
  });
