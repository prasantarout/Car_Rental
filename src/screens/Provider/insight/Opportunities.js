import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import css from '../../../themes/Css';
import normalize from '../../../utils/helpers/dimen';
import Images from '../../../themes/Images';
import Fonts from '../../../themes/Fonts';

function Opportunities() {
  const opportunitiesdata = [
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
    {id: 1},
  ];

  return (
    <FlatList
      data={opportunitiesdata}
      renderItem={RenderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: normalize(350)}}
    />
  );
}

const RenderItem = ({item}) => {
  return (
    <View
      style={[
        css.aic,
        css.p12,
        css.w100,
        css.my10,
        css.row,
        styles.shadowView,
      ]}>
      <Image
        source={Images.carBlack}
        style={styles.carImage}
        resizeMode="contain"
      />
      <View style={{marginLeft: normalize(10)}}>
        <Text style={styles.Title}>Lorem ipsum dolor</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet conse cte tur. Leo non tempus pulvinar.
        </Text>
      </View>
    </View>
  );
};

export default Opportunities;
const styles = StyleSheet.create({
  description: {
    color: '#949494',
    fontFamily: Fonts.Roboto_Regular,
    fontSize: normalize(12),
    width: normalize(200),
    marginTop: normalize(10),
  },
  Title: {
    color: '#060606',
    fontFamily: Fonts.Roboto_Bold,
    fontSize: normalize(15),
  },
  carImage: {height: normalize(80), width: normalize(80)},
  shadowView: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    elevation: 3,
    shadowColor: '#9E4DB6',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
