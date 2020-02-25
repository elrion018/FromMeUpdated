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
  },
  timePick: {
    height: hp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePickButton: {
    flexDirection: 'row',
  },
  timePickTextBe: {
    fontSize: 18,
    color: '#C7CBC1',
  },
  timePickTextAf: {
    fontSize: 18,
    color: '#1B00BF',
  },
  timePickText: {
    fontSize: 18,
  },
  textInput: {
    fontSize: 18,
  },
  contentsWithkeyboard: {
    width: wp('90%'),
    ...Platform.select({
      ios: {
        height: hp('35%'),
      },
      android: {
        height: hp('30%'),
      },
    }),
  },
  contentsWithoutkeyboard: {
    width: wp('90%'),
    height: hp('70%'),
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendModal: {
    height: hp('25%'),
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
      },
      android: {
        elevation: 2,
      },
    }),
  },
  sendText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  timeModal: {
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
