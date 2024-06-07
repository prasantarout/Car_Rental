import React, {useState} from 'react';
import {View} from 'react-native';
import css from '../../../themes/Css';
import MembershipPlanCard from './MembershipPlanCard';
import ProviderOnboardingTemplate from '../../../components/general/ProviderOnboardingTemplate';

const cardList = [
  {
    type: 'Basic',
    price: 99,
    features: [
      'Lorem ipsum dolor sit amet consectetur. Vivamus magna amet tempus sem ornare morbi.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
    ],
  },
  {
    type: 'Pro',
    price: 149,
    features: [
      'Lorem ipsum dolor sit amet consectetur. Vivamus magna amet tempus sem ornare morbi.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
    ],
  },
  {
    type: 'Diamond',
    price: 199,
    features: [
      'Lorem ipsum dolor sit amet consectetur. Vivamus magna amet tempus sem ornare morbi.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
      'Lorem ipsum dolor sit amet consectetur.',
    ],
  },
];

const MembershipPlan = props => {
  const [activeTab, setActiveTab] = useState('Monthly');

  const handleTabPress = val => {
    setActiveTab(val);
  };

  return (
    <ProviderOnboardingTemplate
      title={'Select Membership Plans'}
      subTitle={
        'Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus.'
      }
      tabs={['Monthly', 'Yearly']}
      activeTab={activeTab}
      handleTabPress={handleTabPress}>
      <View style={[css.py20, css.px20]}>
        {cardList.map(value => {
          return <MembershipPlanCard {...value} periodType={activeTab} />;
        })}
      </View>
    </ProviderOnboardingTemplate>
  );
};

export default MembershipPlan;
