import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  item: {
    backgroundColor: '#EFF8DC',
    alignItems: 'center',
    width: wp('90%'),
    marginBottom: wp('3%'),
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
  },
  buttons: {
    width: wp('90%'),
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#B4B2B2',
    fontSize: 15,
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  commentsList: {
    width: wp('80%'),
    marginBottom: hp('2%'),
    justifyContent: 'flex-start',
  },
  comment: {
    marginTop: 5,
    fontSize: 15,
  },
});
