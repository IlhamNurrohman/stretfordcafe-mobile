import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerNew: {
    flex: 1,
    backgroundColor: '#ECECEC',
    paddingTop: 20,
    paddingRight: 35,
    paddingLeft: 35,
    paddingBottom: 20,
  },
  Photo: {
    alignItems: 'center',
  },
  containerPhoto: {
    alignItems: 'center',
    backgroundColor: '#BABABA59',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 100,
  },
  photoWrapper: {
    position: 'relative',
  },
  imageProduct: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  btnUpload: {
    width: 35,
    height: 35,
    backgroundColor: '#6A4029',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: 100,
    left: 115,
  },
  inputBox: {
    marginTop: 20,
    borderBottomColor: '#9F9F9F',
    borderBottomWidth: 2,
  },
  btnSave: {
    // marginBottom: 30,
    marginTop: 30,
    padding: 13,
    borderRadius: 15,
    fontWeight: '900',
  },
  labelStyle: {
    color: 'black',
    fontWeight: '900',
    fontSize: 18,
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
  btnUpload2: {
    marginTop: 15,
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },
  btnUpload1: {
    marginTop: 15,
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },
  containerBtnUpload: {
    width: '90%',
  },
  buttonBox: {
    marginTop: 20,
  },
  btnWrapperCategory: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCategory: {
    backgroundColor: '#6A4029',
    borderRadius: 10,
  },
  btnActive: {
    backgroundColor: '#FFBA33',
    borderRadius: 10,
  },
});