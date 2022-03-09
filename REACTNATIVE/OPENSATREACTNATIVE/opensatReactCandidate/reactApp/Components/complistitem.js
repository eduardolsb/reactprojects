import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function complistItem(){
    return(
        <View style={styles.listcard}>
            <Text style={styles.cardTitle}> ReactNative </Text>
            <Text style={styles.cardSubTitle}> Criando uma aplicação Android e IOS </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listcard:{
        backgroundColor:'#FFF',
        padding: 12,
        borderRadius: 7,
        marginVertical: 5,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    cardSubTitle: {
        fontSize: 10,
        color: '#999',
    },
})