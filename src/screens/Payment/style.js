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
  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
    resizeMode: 'cover'
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
  card: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000000'
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: '#000000'
  },
  methodCard: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20
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