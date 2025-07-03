import React from "react";
import ButtonSubmit from "../Shared/ButtonSubmit";
import StyledInput from "../Shared/StyledInput";
import { Alert, StyleSheet, Text, View } from "react-native";
import axios from "axios";

function handleSubmit(): void {
    // Alert.alert('ni hao epta');
    axios.post('http://10.0.2.2:3000/signup', {
        "username": "qw22",
        "password": "12345",
        "name": "SWAGA",
    })
    .then(response => {
    console.log('Ответ сервера:', response.data);
    })
    .catch(error => {
        console.error('Ошибка:', error.response?.data || error.message);
    });
}

function AuthForm(): React.JSX.Element {
    return(
        <View style={styles.container}>
            <Text style={styles.headline}>Выбери любого питомца, которого ты захочешь</Text>
            <StyledInput
            placeholderText="Username"
            isSecureText={false}
            />
            <StyledInput
            placeholderText="Password"
            isSecureText={true}
            />
            <ButtonSubmit handleSubmit={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    headline: {
        textAlign: 'center',
        marginBottom: 10,
    }
});

export default AuthForm;
