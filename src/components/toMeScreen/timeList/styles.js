import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  item: {
    width: wp('60%'),
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
});
