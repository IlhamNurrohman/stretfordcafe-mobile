import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container:{
    paddingHorizontal: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 300,
    alignSelf: 'center',
    marginBottom: 20
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#000000',
    textAlign: 'center'
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#6A4029',
    textAlign: 'center'
  },
  descTitle: {
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#000000',
    textAlign: 'left',
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000000',
    textAlign: 'left',
    minHeight: 100
  },
  btnContainer: {
    marginTop: 20,
    width: '90%',
    height: 50,
    backgroundColor: '#6A4029',
    borderRadius: 10,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  sizeTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10
  },
  sizeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '60%',
    marginBottom: 10
  },
  sizeTextActive: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
    backgroundColor: '#FFBA33',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    width: 50,
    borderRadius: 30
  },
  sizeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#9F9F9F',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    width: 50,
    borderRadius: 30
  },
})