import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const imgCad = require('../../../assets/add.svg');

export default function Tela1({navigation}) {
    const [desc, setDesc] = useState(""); 

    const Cadastrar = async () => {
        try {
            await AsyncStorage.setItem("Info", JSON.stringify({registro}))
            navigation.navigate("Agenda")
          } catch (err) {
            console.log(err)
          }
    }

    return(
        <View style={style.container}>
           <View style={style.content}>
                <Text style={style.title}>Crie sua Tarefa</Text>
                <TextInput style={style.inputzin} placeholder='Informe a descrição da sua tarefa' placeholderTextColor={"#00000077"} onChangeText={(value) => {setDesc(value)}} />
           </View>
            <TouchableOpacity style={style.btCad} onPress={() => {}}>
                <Text style={style.textBt}>Criar Tarefa</Text>
                <Image style={style.img} source={{uri:imgCad}} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'rgb(255, 213, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        width: '80%',
        height: '200px',
        borderRadius: '25px',
    },
    inputzin: {
        marginTop: '5%',
        height: '50px',
        width: '75%',
        backgroundColor: '#EFEFEF',
        borderRadius: '10px',
        padding: '20px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
    btCad: {
        marginTop:'15%',
        backgroundColor: 'rgb(255, 213, 0)',
        borderRadius: '25px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: '50px',
        width: '50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    },
    img: {
        height: '50px',
        width: '50px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '25px'
    },
    textBt: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: '20px'
    }
});