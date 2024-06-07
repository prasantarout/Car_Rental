import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProviderOnboardingTemplate from '../../../components/general/ProviderOnboardingTemplate';
import css from '../../../themes/Css';
import Txt from '../../../components/micro/Txt';
import FileInput, {FileInputList} from '../../../components/form/FileInput';
import Icons from '../../../themes/Icons';
import Button from '../../../components/micro/Button';
import Colors from '../../../themes/Colors';
import Fonts from '../../../themes/Fonts';

const VehicleDocument = props => {
  const styles = customStyles();
  const navigation = useNavigation();
  const route = useRoute();

  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [vehicleInsurance, setVehicleInsurance] = useState('');
  const [vehicleImageList, setVehicleImageList] = useState([]);

  const handleAddImage = () => {
    let imageList = [...vehicleImageList];
    let length = imageList.length;
    imageList.push({
      url: `url/Image${length}.jpg`,
      name: `Image${length}.jpg`,
      value: `Image${length}.jpg`,
    });
    setVehicleImageList(imageList);
  };

  const handleDeleteImage = index => {
    let imageList = [...vehicleImageList];
    imageList.splice(index, 1);
    setVehicleImageList(imageList);
  };

  return (
    <ProviderOnboardingTemplate
      title={'John Doe, Register your vehicle'}
      subTitle={
        'Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus.'
      }
      steps={['01', '02', '03']}
      activeStep={'03'}
      {...route.params}>
      <View style={[css.py20, css.px20]}>
        <View style={[css.br10, css.p10, styles.innerContainer]}>
          <View style={[css.center]}>
            <Txt style={[css.fs16, css.roboto_Bold, css.py19, css.tac]}>
              Upload Vehicle Image and Document Images
            </Txt>
          </View>
          <FileInputList
            title="Upload Vehicle Images"
            containerStyle={[css.f1]}
            icon={Icons.deleteIcon}
            placeholder="Maximum size 5MB"
            list={vehicleImageList}
            onIconPress={index => handleDeleteImage(index)}
          />
          <TouchableOpacity
            style={[css.mb16, css.mt8]}
            onPress={() => {
              handleAddImage();
            }}>
            <Txt style={styles.addMoreText}>
              {vehicleImageList.length ? 'Add more +' : 'Add image +'}
            </Txt>
          </TouchableOpacity>
          <FileInput
            title="Upload Vehicle Registration Document"
            containerStyle={[css.f1, css.mb16]}
            icon={Icons.upload}
            placeholder="Maximum size 5MB"
            value={vehicleRegistration}
            onChangeText={val => setVehicleRegistration(val)}
          />
          <FileInput
            title="Upload Vehicle Insurance documents"
            containerStyle={[css.f1, css.mb16]}
            icon={Icons.upload}
            placeholder="Maximum size 5MB"
            value={vehicleInsurance}
            onChangeText={val => setVehicleInsurance(val)}
          />
          <View style={[css.mt10, css.mb16]}>
            <Button
              title={
                route?.params?.screenName === 'Add New Car'
                  ? 'Save'
                  : 'Continue'
              }
              onPress={() => {
                route?.params?.screenName === 'Add New Car'
                  ? navigation.navigate('ProviderTabNavigator', {
                      screen: 'My Vehicles',
                    })
                  : navigation.navigate('MembershipPlan');
              }}
            />
          </View>
        </View>
      </View>
    </ProviderOnboardingTemplate>
  );
};

export default VehicleDocument;

const customStyles = () =>
  StyleSheet.create({
    innerContainer: {
      backgroundColor: Colors.cardBg,
    },
    addMoreText: {
      color: '#9E4DB6',
      fontFamily: Fonts.Roboto_Bold,
    },
  });
