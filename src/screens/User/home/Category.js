import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import css from '../../../themes/Css';
import Header from '../../../components/general/Header';
import HomeItem1component from '../../../components/general/HomeItem1component';
import Images from '../../../themes/Images';
import Fonts from '../../../themes/Fonts';
import normalize from '../../../utils/helpers/dimen';
import CustomTab from '../../../components/general/CustomTab';

const tabs = ['Popular', 'Body Type', 'Rent Type'];

const Category = props => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [categorydata, setcategorydata] = useState([
    {
      name: 'Sports Car',
      icon: Images.homecategory1,
      total: '26 Car',
    },
    {
      name: 'Sports Car',
      icon: Images.homecategory2,
      total: '68 Car',
    },
    {
      name: 'SUVs',
      icon: Images.homecategory3,
      total: '52 Car',
    },
    {
      name: 'Convertible',
      icon: Images.homecategory4,
      total: '18 Car',
    },
    {
      name: 'Electric Cars',
      icon: Images.homecategory5,
      total: '26 Car',
    },
    {
      name: 'Cheap Cars',
      icon: Images.homecategory6,
      total: '68 Car',
    },
    {
      name: 'Pickup Van',
      icon: Images.homecategory6,
      total: '52 Car',
    },
    {
      name: 'Electric Cars',
      icon: Images.homecategory8,
      total: '18 Car',
    },
    {
      name: 'Sports Car',
      icon: Images.homecategory1,
      total: '26 Car',
    },
    {
      name: 'Sports Car',
      icon: Images.homecategory2,
      total: '68 Car',
    },
    {
      name: 'SUVs',
      icon: Images.homecategory3,
      total: '52 Car',
    },
    {
      name: 'Convertible',
      icon: Images.homecategory4,
      total: '18 Car',
    },
    {
      name: 'Electric Cars',
      icon: Images.homecategory5,
      total: '26 Car',
    },
    {
      name: 'Cheap Cars',
      icon: Images.homecategory6,
      total: '68 Car',
    },
    {
      name: 'Pickup Van',
      icon: Images.homecategory6,
      total: '52 Car',
    },
    {
      name: 'Electric Cars',
      icon: Images.homecategory8,
      total: '18 Car',
    },
  ]);

  return (
    <View style={[css.f1, css.bgWhite]}>
      <Header
        enableLightTheme
        enableBackButton
        headerBlackText={'Catagories'}
        enableNotificationButton
        enableMenuButton
      />
      <View style={[css.aic, css.jcc, css.w100, css.f1]}>
        <CustomTab
          tabs={tabs}
          activeTab={activeTab}
          onPress={setActiveTab}
          containerStyle={{width: '92%'}}
        />
        <HomeItem1component
          marginTop={normalize(18)}
          paddingBottom={normalize(20)}
          data={categorydata}
          horizontal={false}
          topsection={false}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabItem: {
    paddingVertical: normalize(20),
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: normalize(12),
    fontFamily: Fonts.Roboto_Medium,
  },
});
