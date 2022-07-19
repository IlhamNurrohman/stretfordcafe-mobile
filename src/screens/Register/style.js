import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  imageBg: {
    flex: 1
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
  },
  title: {
    flex: 1,
    fontFamily: 'Poppins-Bold',
    color: '#ffffff',
    fontSize: 65,
    textAlignVertical: 'center',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  btnContainer: {
    flex: 1,
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
  gbutton: {
    backgroundColor: '#ffffff',
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
  google: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 17
  },
  gbuttonText: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 17
  },

})