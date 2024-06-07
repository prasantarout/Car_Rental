import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/general/Header';
import CustomTab from '../../../components/general/CustomTab';
import css from '../../../themes/Css';
import normalize from '../../../utils/helpers/dimen';
import TextInputItem from '../../../components/form/TextinputItem';
import Icons from '../../../themes/Icons';
import Opportunities from './Opportunities';
import Stats from './Stats';

const Insights = props => {
  const [activeTab, setActiveTab] = useState('Opportunities');
  const tabs = ['Opportunities', 'Stats'];
  const [search, setsearch] = useState('');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };
  return (
    <View style={[styles.containerView, {}]}>
      <Header
        enableLightTheme
        headerBlackText={'Insights'}
        enableNotificationButton
        enableMenuButton
      />
      <View style={styles.container}>
        <TextInputItem
          selectionColor={'transparent'}
          borderRadius={normalize(30)}
          isleftimage={true}
          leftimageicon={Icons.search}
          placeholder={'Search by vehicle model/brand'}
          value={search}
          onChangeText={val => setsearch(val)}
          marginTop={0}
        />
      </View>
      <View style={[css.px10, {}]}>
        <CustomTab
          tabs={tabs}
          activeTab={activeTab}
          onPress={handleTabPress}
          containerStyle={{
            backgroundColor: '#F6F6F6',
          }}
        />
        <View>
          {activeTab === 'Opportunities' ? <Opportunities /> : <Stats />}
        </View>
      </View>
    </View>
  );
};

export default Insights;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});
