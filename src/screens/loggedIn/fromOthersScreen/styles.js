import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('50%'),
    ...Platform.select({
      ios: {
        marginBottom: hp('30%'),
      },
      android: {
        marginBottom: hp('15%'),
      },
    }),
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'justify',
    ...Platform.select({
      ios: {
        marginBottom: hp('2%'),
      },
      android: {
        marginBottom: hp('1%'),
      },
    }),
  },
  inputText: {
    textAlign: 'justify',
    borderBottomWidth: 4,
    borderColor: 'black',
    ...Platform.select({
      ios: {
        width: wp('70%'),
        fontSize: 35,
        marginBottom: hp('2%'),
      },
      android: {
        width: wp('75%'),
        height: hp('8%'),
        fontSize: 30,
        marginBottom: hp('1%'),
      },
    }),
  },
  signUp: {
    borderBottomWidth: 4,
    borderColor: 'black',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        width: wp('70%'),
        height: hp('6%'),
        marginBottom: hp('2%'),
      },
      android: {
        width: wp('75%'),
        height: hp('8%'),
        marginBottom: hp('1%'),
      },
    }),
  },
  signUpText: {
    textAlign: 'justify',
    ...Platform.select({
      ios: {
        width: wp('70%'),
        fontSize: 30,
      },
      android: {
        width: wp('75%'),
        fontSize: 30,
      },
    }),
  },
});
