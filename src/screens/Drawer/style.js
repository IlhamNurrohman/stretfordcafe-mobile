import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // borderRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  profileContainer: {
    backgroundColor: '#6A4029',
    paddingVertical: '15%',
    display: 'flex',
    borderBottomRightRadius: 20
  },
  profpict: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 10  
  },
  username: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    textAlign: 'center'
  },
  email: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center'
  },
  // menuContainer: {

  // },
  menuList:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10%',
    paddingVertical: 20
  },
  menuText: {
    marginLeft: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#6A4029'
  },
})