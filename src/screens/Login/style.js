import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  imageBg: {
    flex: 1
  },
  imageBgClr: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 10,
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  titleContainer: {
    flex: 1,
    paddingLeft: '10%'
    // alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 65,
    fontFamily: 'Poppins-Bold',
    textAlign: 'left'
  },
  btmContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10%',
    justifyContent: 'flex-end'
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#ffffff'
  },
  forgot: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    marginTop: 5
  },
  loginBtn: {
    backgroundColor: '#FFBA33',
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
  loginText: {
    color: '#6A4029',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    fontFamily: 'Poppins-Bold'
  },
  info: {
    marginTop: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  border: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: '20%'
  },
  infoText:{
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    marginHorizontal: 10
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
  gbuttonText: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 17
  },
  passContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    alignSelf: 'center',
    width: '100%'
  },
  eye: {
    color: '#ffffff',
    fontSize: 25
  }
})