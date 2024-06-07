import { StyleSheet } from 'react-native';
import normalize from '../utils/helpers/dimen';

// Function to normalize spacing values

export const Margin = (maxValue) => {
  const styles = {};

  // Margin
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `m${i}`;
    styles[marginClass] = { margin: normalize(i) };
  }

  // Margin Top
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `mt${i}`;
    styles[marginClass] = { marginTop: normalize(i) };
  }

  // Margin Bottom
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `mb${i}`;
    styles[marginClass] = { marginBottom: normalize(i) };
  }

  // Margin Left
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `ml${i}`;
    styles[marginClass] = { marginLeft: normalize(i) };
  }

  // Margin Right
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `mr${i}`;
    styles[marginClass] = { marginRight: normalize(i) };
  }


  // Margin Horizontal
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `mx${i}`;
    styles[marginClass] = { marginHorizontal: normalize(i) };
  }

  // Margin Vertical
  for (let i = 0; i <= maxValue; i++) {
    const marginClass = `my${i}`;
    styles[marginClass] = { marginVertical: normalize(i) };
  }

  return StyleSheet.create(styles);
};

export const Padding = (maxValue) => {
  const styles = {};

  // Generate padding classes
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `p${i}`;
    styles[paddingClass] = { padding: normalize(i) };
  }

  
  // Margin Top
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `pt${i}`;
    styles[paddingClass] = { paddingTop: normalize(i) };
  }

  // padding Bottom
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `pb${i}`;
    styles[paddingClass] = { paddingBottom: normalize(i) };
  }

  // padding Left
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `pl${i}`;
    styles[paddingClass] = { paddingLeft: normalize(i) };
  }

  // padding Right
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `pr${i}`;
    styles[paddingClass] = { paddingRight: normalize(i) };
  }


  // padding Horizontal
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `px${i}`;
    styles[paddingClass] = { paddingHorizontal: normalize(i) };
  }

  // padding Vertical
  for (let i = 0; i <= maxValue; i++) {
    const paddingClass = `py${i}`;
    styles[paddingClass] = { paddingVertical: normalize(i) };
  }

  return StyleSheet.create(styles);
};


