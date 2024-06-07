import {View} from 'react-native';
import React, {useState} from 'react';
import css from '../../../themes/Css';
import Header from '../../../components/general/Header';
import HomeItem1component from '../../../components/general/HomeItem1component';
import Images from '../../../themes/Images';
import normalize from '../../../utils/helpers/dimen';

const Category = props => {
  const [branddata, setbranddata] = useState([
    {
      name: 'Audi',
      icon: Images.homebrand1,
      total: 'Starting £570',
    },
    {
      name: 'BMW',
      icon: Images.homebrand2,
      total: 'Starting £570',
    },
    {
      name: 'Ferrari',
      icon: Images.homebrand3,
      total: 'Starting £570',
    },
    {
      name: 'Lamborghini',
      icon: Images.homebrand4,
      total: 'Starting £570',
    },
    {
      name: 'Mercedes',
      icon: Images.homebrand5,
      total: 'Starting £570',
    },
    {
      name: 'Range Rover',
      icon: Images.homebrand6,
      total: 'Starting £570',
    },
    {
      name: 'Alfa Romeo',
      icon: Images.homebrand7,
      total: 'Starting £570',
    },
    {
      name: 'Aston Martin',
      icon: Images.homebrand8,
      total: 'Starting £570',
    },
    {
      name: 'Bentley',
      icon: Images.homebrand9,
      total: 'Starting £570',
    },
    {
      name: 'Cadillac',
      icon: Images.homebrand10,
      total: 'Starting £570',
    },
    {
      name: 'Aston Martin',
      icon: Images.homebrand11,
      total: 'Starting £570',
    },
    {
      name: 'Dodge',
      icon: Images.homebrand12,
      total: 'Starting £570',
    },
    {
      name: 'Cadillac',
      icon: Images.homebrand10,
      total: 'Starting £570',
    },
    {
      name: 'Aston Martin',
      icon: Images.homebrand11,
      total: 'Starting £570',
    },
    {
      name: 'Dodge',
      icon: Images.homebrand12,
      total: 'Starting £570',
    },
    {
      name: 'Cadillac',
      icon: Images.homebrand10,
      total: 'Starting £570',
    },
    {
      name: 'Aston Martin',
      icon: Images.homebrand11,
      total: 'Starting £570',
    },
    {
      name: 'Dodge',
      icon: Images.homebrand12,
      total: 'Starting £570',
    },
    {
      name: 'Cadillac',
      icon: Images.homebrand10,
      total: 'Starting £570',
    },
    {
      name: 'Aston Martin',
      icon: Images.homebrand11,
      total: 'Starting £570',
    },
    {
      name: 'Dodge',
      icon: Images.homebrand12,
      total: 'Starting £570',
    },
    {
      name: 'Cadillac',
      icon: Images.homebrand10,
      total: 'Starting £570',
    },
    {
      name: 'Aston Martin',
      icon: Images.homebrand11,
      total: 'Starting £570',
    },
    {
      name: 'Dodge',
      icon: Images.homebrand12,
      total: 'Starting £570',
    },
  ]);

  return (
    <View style={[css.panel, css.aic]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Brands'}
        enableNotificationButton
        enableMenuButton
      />
      <HomeItem1component
        paddingBottom={normalize(20)}
        data={branddata}
        horizontal={false}
        topsection={false}
        numColumns={3}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Category;
