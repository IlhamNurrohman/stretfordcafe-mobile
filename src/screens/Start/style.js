import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  imageBg: {
    flex: 1,
    display: 'flex',
    // justifyContent: 'space-evenly'
  },
  imageBgClr: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 10,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  title: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 50,
  },
  info:{
    fontSize: 17,
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FFBA33',
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: '5%'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#6A4029'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  buttonReg: {
    backgroundColor: '#6A4029',
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    color: '#FFFFFF'
  },
  regText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#ffffff'
  },

});
