import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: '5%'
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
  searchInput: {
    paddingVertical: 5,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    width: '100%',
    // textAlignVertical: 'auto'
  },
  scrollViewH: {
    marginHorizontal: '5%',
    // marginVertical: 10
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
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#6A4029'
  },
  sortActive: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#6A4029'
  },
  sort: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#9A9A9D'
  },
})