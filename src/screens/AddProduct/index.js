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
import { useSelector, useDispatch } from 'react-redux';
import style from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import { Button } from '@rneui/themed';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
// const REACT_APP_BE_HOST = 'http://192.168.140.238:8000';
import { REACT_APP_BE_HOST } from '@env'
import axios from 'axios'

const AddProduct = () => {
    const { userInfo } = useSelector(state => state.auth)
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false)
    const [body, setBody] = useState({
        name: '',
        price: '',
        delivery_methods_id: '',
        description: '',
        pictures: null,
        categories_id: '',
    });
    const [modal, setModal] = useState({
        modalUpload: false,
        modalStatus: false,
    });
    const successToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Add Success'
        })
    }

    const openCam = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        try {
            const result = await launchCamera(options);
            setFile({
                name: result.assets[0].fileName,
                size: result.assets[0].fileSize,
                type: result.assets[0].type,
                uri: result.assets[0].uri,
                height: result.assets[0].height,
                width: result.assets[0].width,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const openStorage = async () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        try {
            const result = await launchImageLibrary(options);
            setFile({
                name: result.assets[0].fileName,
                size: result.assets[0].fileSize,
                type: result.assets[0].type,
                uri: result.assets[0].uri,
                height: result.assets[0].height,
                width: result.assets[0].width,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const addProductHandler = async () => {
        try {
            setLoading(true)
            const { name, description, delivery_methods_id, categories_id, price } = body
            let bodyForm = new FormData();
            bodyForm.append('pictures', file);
            bodyForm.append('name', name);
            bodyForm.append('description', description);
            bodyForm.append('delivery_methods_id', delivery_methods_id);
            bodyForm.append('categories_id', categories_id);
            bodyForm.append('price', price);

            const config = { headers: { Authorization: `Bearer ${userInfo.token}`, "content-type": "multipart/form-data" } }
            const response = await axios.post(`${REACT_APP_BE_HOST}/products`, bodyForm, config)
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
            <ScrollView>
                <View style={style.containerNew}>
                    <View style={style.Photo}>
                        <View style={style.photoWrapper}>
                            <Image
                                source={{
                                    uri: body.file
                                        ? body.file.uri
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
                            value={body.name}
                            onChangeText={name => setBody({ ...body, name })}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Price</Text>
                        <TextInput
                            placeholder="Input the product price"
                            placeholderTextColor="#9F9F9F"
                            value={body.price}
                            onChangeText={price => setBody({ ...body, price })}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Delivery info</Text>
                        <TextInput
                            placeholder="Type delivery information"
                            placeholderTextColor="#9F9F9F"
                            value={body.delivery_methods_id}
                            onChangeText={delivery_methods_id => setBody({ ...body, delivery_methods_id })}
                        />
                    </View>
                    <View style={style.inputBox}>
                        <Text style={style.labelStyle}>Description</Text>
                        <TextInput
                            placeholder="Describe your product"
                            placeholderTextColor="#9F9F9F"
                            value={body.description}
                            onChangeText={description => setBody({ ...body, description })}
                        />
                    </View>
                    <View style={style.buttonBox}>
                        <Text style={style.labelStyle}>Select Category</Text>
                        <View style={style.btnWrapperCategory}>
                            <Button
                                onPress={() => setBody({ ...body, categories_id: 1 })}
                                buttonStyle={
                                    body.categories_id === 1 ? style.btnActive : style.btnCategory
                                }>
                                COFFEE
                            </Button>
                            <Button
                                onPress={() => setBody({ ...body, categories_id: 4 })}
                                buttonStyle={
                                    body.categories_id === 4 ? style.btnActive : style.btnCategory
                                }>
                                NON COFFEE
                            </Button>
                            <Button
                                onPress={() => setBody({ ...body, categories_id: 6 })}
                                buttonStyle={
                                    body.categories_id === 6 ? style.btnActive : style.btnCategory
                                }>
                                FOOD
                            </Button>
                        </View>
                    </View>
                    <Button
                        onPress={addProductHandler}
                        buttonStyle={style.btnSave}
                        color="#6A4029">
                        Save Product
                    </Button>
                </View>
            </ScrollView>
            <Toast />
            <Modal
                visible={modal.modalUpload}
                transparent={true}
                animationType="slide">
                <View style={style.modalContainer}>
                    <View style={style.modalBody}>
                        <Text style={style.titleModal}>Upload Photo</Text>
                        <View style={style.containerBtnUpload}>
                            <Button
                                onPress={openStorage}
                                buttonStyle={style.btnUpload2}>
                                Choose from library
                            </Button>
                            <Button
                                onPress={openCam}
                                buttonStyle={style.btnUpload2}>
                                Take a Photo
                            </Button>
                            <Button
                                onPress={() => {
                                    setModal({ ...modal, modalUpload: false });
                                }}
                                buttonStyle={style.btnUpload2}>
                                Cancel
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default AddProduct;