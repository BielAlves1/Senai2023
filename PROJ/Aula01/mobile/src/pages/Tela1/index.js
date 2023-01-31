import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

const imgCad = require('../../../assets/add.svg');

export default function Tela1({ navigation }) {
    const [desc, setDesc] = useState("");

    const alert = () => Alert.alert("SUCESSO!", "Tarefa cadastrada com Sucesso!");
    const alert2 = () => Alert.alert("ERRO!", "Tarefa não cadastrada!");

    const cadastrar = () => {
        fetch("http://localhost:5000/pedidos/create", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(desc)
        })
            .then(res => { return res.json() })
            .then(data => {
                if (data != undefined) {
                    alert();
                } else {
                    alert2()
                }
            })
    }

    return (
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}>Faça seu Pedido</Text>
                <TextInput style={style.inputzin} placeholder='Informe a descrição da sua tarefa' placeholderTextColor={"#00000077"} onChangeText={(value) => { setDesc(value) }} />
            </View>
            <TouchableOpacity style={style.btCad} >
                <Text style={style.textBt}>Criar Tarefa</Text>
                <Image style={style.img} source={{ uri: imgCad }} />
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
        backgroundColor:'#1c9aee',
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
        marginTop: '15%',
        backgroundColor: '#1c9aee',
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