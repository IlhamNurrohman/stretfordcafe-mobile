import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    paddingVertical: 20
  },
  cartContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  cardProduct: {
    width: 120,
    height: 150,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  price: {
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: '#895537'
  },
  rightCart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
    marginBottom: 10
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  counter: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    width: 25,
    height: 25,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(231, 170, 54, 0.52)',
    color: '#6A4029'
  },
  quantity: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    width: 25,
    height: 25,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 20,
    color: '#000000'
  },
  couponBtn: {
    marginTop: 20,
    backgroundColor: '#FFBA33',
    width: '70%',
    height: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  couponText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#895537'
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '80%',
    marginVertical: 40
  },
  infoRow: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoLeft: {
    fontFamily: 'Poppins-Bold',
    color: '#ADADAD',
    fontSize: 15,
  },
  infoRight: {
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 15,
  },
  totalRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%'
  },
  total: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000'
  },
  checkoutBtn: {
    marginTop: 20,
    backgroundColor: '#FFBA33',
    width: '70%',
    height: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  checkoutText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#895537'
  },
})