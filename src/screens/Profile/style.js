import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },
  title: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 34,
    color: '#000000'
  },
  subtitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subtitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000000'
  },
  edit: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#6A4029'
  },
  card: {
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20
  },
  profpict: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'center',
  },
  info: {
    marginLeft: 20,
    flexShrink: 1
  },
  name: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 18,
    color: '#000000'
  },
  email: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#6A4029',
    // flexWrap: 'wrap-reverse'
  },
  border: {
    borderBottomWidth: 0.5,
    opacity: 0.5
  },
  menuCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50,
    borderRadius: 20,
    paddingHorizontal: '10%',
    paddingVertical: 10,
    marginVertical: 10
  },
  menu:{
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000000'
  },
  saveBtn: {
    backgroundColor: '#6A4029',
    height: 60,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  saveTxt: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 17,
    color: '#ffffff'
  }
})