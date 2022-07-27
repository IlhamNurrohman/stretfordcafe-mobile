import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Modal,
    Pressable,
} from 'react-native';
import { useSelector } from 'react-redux';
import style from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import { Button } from '@rneui/themed';
import ImagePicker from 'react-native-image-crop-picker';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Toast from 'react-native-toast-message';
import { REACT_APP_BE_HOST } from '@env'

const AddPromo = () => {
    const { userInfo } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false)
    const [open, setOpen] = useState(false);
    const [body, setBody] = useState({
        coupon_code: '',
        normal_price: '',
        description: '',
        delivery_methods_id: '',
        discount: '',
        end_date: '',
        pictures: ''
    });
    const [modal, setModal] = useState({
        modalUpload: false,
    });
    const successToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Add Success'
        })
    }

    const addPromoHandler = async () => {
        try {
            setLoading(true)
            const { coupon_code, normal_price, description, delivery_methods_id, discount, end_date, pictures } = body
            bodyForm.append('coupon_code', coupon_code);
            bodyForm.append('normal_price', normal_price);
            bodyForm.append('description', description);
            bodyForm.append('delivery_methods_id', delivery_methods_id);
            bodyForm.append('discount', discount);
            bodyForm.append('end_date', end_date);
            bodyForm.append('pictures', pictures);

            const config = { headers: { Authorization: `Bearer ${userInfo.token}`, "content-type": "multipart/form-data" } }
            const response = await axios.post(`${REACT_APP_BE_HOST}/promos`, bodyForm, config)
            console.log(response)
            console.log('SUCCESS')
            setIsSuccess(true)
            successToast()
            setLoading(false)
            // props.navigation.navigate('Home')
        } catch (error) {
            console.log('FAILED')
            console.log(error)
            setLoading(false)
        }
    }
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.containerPromo}>
                    <View style={style.Photo}>
                        <View style={style.photoWrapper}>
                            <Image
                                source={{
                                    uri: body.pictures
                                        ? body.pictures.uri
                                        : 'https://res.cloudinary.com/ilham-nurrohman/image/upload/v1658845129/stretford-cafe/c8e5qhz4vqjgsnoj7oa1.png',
                                }}
                                style={style.imageProduct}
                            />
                            <Pressable
                                onPress={() => {
                                    setModal({ ...modal, modalUpload: true });
                                }}
                                style={style.btnUpload}>
                                <Octicons name="plus" size={30} color="white" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Name</Text>
                        <TextInput
                            placeholder="Input the product name"
                            placeholderTextColor="#9F9F9F"
                            value={body.coupon_code}
                            onChangeText={coupon_code => setBody({ ...body, coupon_code })}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Price</Text>
                        <TextInput
                            placeholder="Input the promo price"
                            placeholderTextColor="#9F9F9F"
                            value={body.normal_price}
                            onChangeText={normal_price => setBody({ ...body, normal_price })}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Discount</Text>
                        <TextInput
                            placeholder="Input the promo discount"
                            placeholderTextColor="#9F9F9F"
                            value={body.discount}
                            onChangeText={discount => setBody({ ...body, discount })}
                        />
                    </View>
                    <View style={style.dateBox}>
                        <Text style={style.labelStyle}>Expired Date</Text>
                        <View style={style.containerDate}>
                            <Text style={style.textExpired}>{`${moment(
                                body.end_date,
                            ).format('MMMM Do YYYY')}`}</Text>
                            <Fontisto
                                name="date"
                                size={20}
                                onPress={() => setOpen(true)}
                                style={style.dateLogo}
                            />
                            <DatePicker modal open={open} end_date={body.end_date ? new Date(body.end_date) : new Date()} mode='date'
                                onConfirm={end_date => {
                                    setOpen(false)
                                    // console.log(moment(date).format('YYYY-MM-DD'))
                                    setBody({ ...body, end_date: moment(end_date).format('YYYY-MM-DD') })
                                }}
                                onCancel={() => setOpen(false)} />
                        </View>
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Description</Text>
                        <TextInput
                            placeholder="Input the promo description"
                            placeholderTextColor="#9F9F9F"
                            value={body.description}
                            onChangeText={description => setBody({ ...body, description })}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Coupon</Text>
                        <TextInput
                            placeholder="Input the promo coupon"
                            placeholderTextColor="#9F9F9F"
                            value={body.couponCode}
                            onChangeText={couponCode => setBody({ ...body, couponCode })}
                        />
                    </View>
                    <Button
                        onPress={addPromoHandler}
                        buttonStyle={style.btnSave}
                        color="#6A4029">
                        Save Promo
                    </Button>
                </View>
            </ScrollView>
            {/* <Modal
        visible={modal.modalUpload}
        transparent={true}
        animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalBody}>
            <Text style={style.titleModal}>Upload Photo</Text>
            <Text>Choose Your Profile Picture</Text>
            <View style={style.containerBtnUpload}>
              <Button
                onPress={takePhotoFromCamera}
                buttonStyle={style.btnUpload1}>
                Take a Photo
              </Button>
              <Button
                onPress={chooseFromLibrary}
                buttonStyle={style.btnUpload1}>
                Choose from library
              </Button>
              <Button
                onPress={() => {
                  setModal({...modal, modalUpload: false});
                }}
                buttonStyle={style.btnUpload1}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal> */}
        </>
    );
};

export default AddPromo;