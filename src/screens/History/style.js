import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container:{
    paddingHorizontal: '5%',
    paddingVertical: 20,
    paddingBottom: 20
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000000'
  },
  card: {
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    marginVertical: 10
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  info: {
    marginLeft: 20,
    flexShrink: 1
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000000'
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#895537'
  },
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6A4029'
  },
})