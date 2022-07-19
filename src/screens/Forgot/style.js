import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  imgBg: {
    flex: 1,
  },
  imageBgClr: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column'
  },
  titleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '15%'
  },
  title: {
    // flex: 1,
    fontFamily: 'Poppins-Bold',
    color: '#ffffff',
    fontSize: 65,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  subtitle: {
    color: '#ffffff',
    textAlign: 'center'
  },
  btnContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // paddingBottom: '10%'
    // backgroundColor: 'red'
  },
  input: {
    width: '80%',
    borderBottomColor: '#ffffff',
    fontFamily: 'Poppins-Bold',
    color: '#ffffff',
    fontSize: 14,
    borderBottomWidth: 2,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#6A4029',
    width: '80%',
    alignSelf: 'center',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: '5%'
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 17
  },
})