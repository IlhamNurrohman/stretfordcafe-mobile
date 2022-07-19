import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: '5%'
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000000'
  },
  searchContainer: {
    display: 'flex',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEEEE',
    marginHorizontal: '20%',
    borderRadius: 100,
    paddingHorizontal: 15,
    // paddingVertical: 5
  },
  searchInput:{
    paddingVertical: 5,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    width: '100%',
    textAlignVertical: 'auto'
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
    width: 800,
  },
  scrollViewH:{
    marginHorizontal: '5%',
    marginVertical: 10
  },
  categoryText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#9A9A9D',
    marginRight: 20
  },
  categoryTextAct: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    color: '#6A4029',
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#6A4029'
  },
  productContainer: {
    marginVertical: 10,
    marginHorizontal: '5%'
  }
})