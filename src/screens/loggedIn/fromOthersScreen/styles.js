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
  contentsBox: {
    width: wp('100%'),
    height: hp('90%'),
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentsModal: {
    width: wp('80%'),
    borderWidth: 1,
    borderRadius: 28,
    borderColor: '#4f5458',
    backgroundColor: '#FFFFF7',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
          height: 3,
          width: 2,
        },
        height: hp('30%'),
      },
      android: {
        elevation: 2,
        height: hp('40%'),
      },
    }),
  },
});
