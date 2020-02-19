import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container_HomeScreen: {
    flex: 1,
    backgroundColor: '#FFFFF7',
  },
  titleBox_HomeScreen: {
    width: wp('100%'),
  },

  titleText_HomeScreen: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
  },
  titleLine_HomeScreen: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    ...Platform.select({
      ios: {
        marginHorizontal: 130,
        marginTop: hp('2%'),
      },
      android: {
        marginHorizontal: 130,
        marginTop: hp('3%'),
      },
    }),
  },

  titleSpace_HomeScreen: {
    height: hp('10%'),
    width: wp('100%'),
    justifyContent: 'center',
  },

  spaceBetweenTitleAndContents_HomeScreen: {
    ...Platform.select({
      ios: {
        height: hp('5%'),
      },
      android: {
        height: hp('7%'),
      },
    }),
  },

  contents2_HomeScreen: {
    marginTop: hp('10%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  contents3_HomeScreen: {
    backgroundColor: '#1B00BF',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },

  contents4_HomeScreen: {
    backgroundColor: '#BF008A',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },

  contents5_HomeScreen: {
    height: hp('13%'),
  },

  button_HomeScreen: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});
