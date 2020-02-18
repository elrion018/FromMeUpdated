import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container_HomeScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  makeSpaceForTitle_HomeScreen: {
    flex: 10,
    height: hp('10%'),
    width: wp('100%'),
  },
  titleBox_HomeScreen: {
    height: hp('8%'),
    width: wp('100%'),
  },

  titleText_HomeScreen: {
    color: 'black',
    textAlign: 'center',
    fontSize: wp('6%'),
  },
  titleLine_HomeScreen: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 145,
  },

  titleSpace_HomeScreen: {
    flex: 10,
    height: hp('10%'),
    width: wp('100%'),
    justifyContent: 'center',
  },

  spaceBetweenTitleAndContents_HomeScreen: {
    flex: 7,
    height: hp('7%'),
    width: wp('100%'),
  },

  contents2_HomeScreen: {
    flex: 60,
    height: hp('60%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  contents3_HomeScreen: {
    backgroundColor: '#1B00BF',
    height: 6,
    width: 6,
    borderRadius: 3,
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },

  contents4_HomeScreen: {
    backgroundColor: '#BF008A',
    height: 6,
    width: 6,
    borderRadius: 3,
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },

  contents5_HomeScreen: {
    flex: 13,
    height: hp('13%'),
    width: wp('100%'),
  },

  button_HomeScreen: {
    color: 'black',
    textAlign: 'center',
    fontSize: wp('5%'),
  },
});
