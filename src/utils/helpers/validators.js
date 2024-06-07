export const formatPhoneNumber = (oldVal, newVal, withCountryCode) => {
  if (withCountryCode) {
    if (newVal.length < 17) {
      let tempNumberArr1 = newVal.split(' ');
      let oldNumberArr = [];
      let newNumberArr = [];
      tempNumberArr1.map((val, index) => {
        if (val) {
          oldNumberArr.push(val);
        }
      });

      let tempNumberArr2 = newVal.split('');
      tempNumberArr2.map((val, index) => {
        if (
          (index === 3 || index === 8 || index === 12) &&
          tempNumberArr2[index] !== ' '
        ) {
          newNumberArr.push(' ');
        }
        newNumberArr.push(val);
      });
      let formattedString = newNumberArr.toString().replace(/\,/g, '');

      return formattedString;
    } else {
      return oldVal;
    }
  } else {
    if (newVal.length < 13) {
      let tempNumberArr1 = newVal.split(' ');
      let oldNumberArr = [];
      let newNumberArr = [];
      tempNumberArr1.map((val, index) => {
        if (val) {
          oldNumberArr.push(val);
        }
      });

      let tempNumberArr2 = newVal.split('');
      tempNumberArr2.map((val, index) => {
        if ((index === 4 || index === 8) && tempNumberArr2[index] !== ' ') {
          newNumberArr.push(' ');
        }
        newNumberArr.push(val);
      });
      let formattedString = newNumberArr.toString().replace(/\,/g, '');

      return formattedString;
    } else {
      return oldVal;
    }
  }
};
