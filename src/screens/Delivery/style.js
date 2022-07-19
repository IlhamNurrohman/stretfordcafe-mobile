import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container:{
    paddingHorizontal: '5%',
    paddingVertical: 20
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000000'
  },
  subtitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  subtitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#000000'
  },
  change: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#6A4029'
  },
  addressCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20
  },
  address: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: '#000000'
  },
  phone: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000000'
  },
  border: {
    borderWidth: 1,
    borderColor: '#000000',
    opacity: 0.1,
    marginVertical: 5
  },
  delivery: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#000000',
    marginVertical: 5,
  },
  paymentBtn: {
    backgroundColor: '#6A4029',
    width: '70%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paymentTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center'
  },
  totalContainer: {
    paddingHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
})