import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    width: wp('70%'),
    marginBottom: hp('5%'),
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  btnKakaoLogin: {
    width: wp('70%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8E71C',
    borderRadius: 10,
    borderWidth: 0,
  },
  txtKakaoLogin: {
    fontSize: 16,
  },
});
