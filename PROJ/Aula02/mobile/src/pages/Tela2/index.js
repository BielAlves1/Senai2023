import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const imgIcon = require('../../../assets/caderno.svg');

export default function Tela2({navigation}) {
    const [tarefa, setTarefa] = useState([]); 

    useEffect(() => {
        tarefas();
      });


    const tarefas = () => {
        fetch("http://localhost:5000/tarefas/read")
        .then(resp => {return resp.json()})
        .then(task => {
        setTarefa(task);
        })
    }

    const Ler = async () => {
        try {
            let info = await AsyncStorage.getItem("Info");
            if(info !== null) {
                info = JSON.parse(info);
                info.push(form);
            }else {
                info = new Array(form);
            }

            await AsyncStorage.setItem("registro", JSON.stringify(info));

            navigation.navigate("Historico")
        }catch(e) {
            console.log(e);
        }
    }

    return(
        <View style={style.container}>
            <TouchableOpacity style={style.btCad} onPress={() => {navigation.navigate("Tela1")}}>
                <Text style={style.textBt}>Tarefa</Text>
                <Image style={style.img} source={{uri:imgIcon}} />
            </TouchableOpacity>
            <ScrollView>
            {
                tarefa.map((info, index) => {
                    return (
                        <View style={style.content} key={index}>
                            <Text style={style.title}>Id: {info.id}</Text>
                            <Text style={style.text}>Descrição: {info.descricao}</Text>
                            <Text style={style.text}>Hora Tarefa: {info.hora_inicio}</Text>
                            <Text style={style.text}>Hora Encerramento: {info.hora_fim == null ? 'Não Encerrada' : info.hora_fim}</Text>
                            <Text style={style.text}>Status: {info.status == 1 ? 'Aberta' : info.status == 2 ? 'Finalizada' : 'Cancelada'}</Text>
                        </View>
                        )
                    })
            }
            </ScrollView>
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
        marginLeft: '12%',
        backgroundColor: 'rgb(255, 213, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        width: '80%',
        height: '150px',
        borderRadius: '25px',
    },
    btCad: {
        marginTop:'5%',
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
        height: '40px',
        width: '40px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    text: {
        fontSize: '15px',
        color: 'white'
    },
    textBt: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: '20px'
    }
});