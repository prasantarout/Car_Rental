import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import css from '../../../themes/Css';
import CustomTab from '../../../components/general/CustomTab';
import Header from '../../../components/general/Header';
import ActiveRides from './ActiveRides';
import CompletedRide from './CompletedRide';

const My_Rides_Screen = props => {
  const [activeTab, setActiveTab] = useState('Active Ride');
  const tabs = ['Active Ride', 'Completed Ride'];

  const handleTabPress = tab => {
    setActiveTab(tab);
    // You can add navigation logic here if needed
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'white',
        }}>
        <Header
          enableLightTheme
          headerBlackText={'My Rides'}
          enableNotificationButton
          enableMenuButton
        />
        <View style={[css.px10]}>
          <CustomTab
            tabs={tabs}
            activeTab={activeTab}
            onPress={handleTabPress}
          />
          <View>
            {activeTab === 'Active Ride' ? <ActiveRides /> : <CompletedRide />}
          </View>
        </View>
      </View>
    </>
  );
};

export default My_Rides_Screen;

const styles = StyleSheet.create({});
