import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    paddingHorizontal: '5%'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 20,
    color: '#000000',
    marginBottom: 20
  },
  profpict: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'center',
    alignSelf: 'center'
  },
  pencilContainer: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: '#6A4029',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 120,
    left: 230
  },
  inputContainer: {
    display: 'flex',
    marginVertical: 10,
    paddingHorizontal: '5%'
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: '#9f9f9f'
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    padding: 0,
    height: 25,
    color: '#000000'
  },
  dateInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  border: {
    borderBottomWidth: 1,
    borderColor: '#9f9f9f'
  },
  genderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  gender: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#9f9f9f',
    marginHorizontal: 20
  },
  genderActive: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#6A4029',
    marginHorizontal: 20
  },
  radio: {
    marginRight: 10,
    // color: '#000000'
  },
  saveBtn: {
    marginTop: 20,
    backgroundColor: '#6A4029',
    height: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: '#ffffff'
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  modalBody: {
    width: 365,
    height: 280,
    backgroundColor: '#e9e9e9',
    padding: 20,
    borderRadius: 15,
    marginTop: 350,
    alignItems: 'center',
  },
  titleModal: {
    fontSize: 30,
    color: 'black',
  },
  btnUpload: {
    marginTop: 15,
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },
  containerBtnUpload: {
    width: '90%',
  },
})