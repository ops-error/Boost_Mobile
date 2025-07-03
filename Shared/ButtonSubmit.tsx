import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonSubmitType = {
    handleSubmit(): void,
}

function ButtonSubmit(props: ButtonSubmitType): React.JSX.Element {
    return(
        <View style={styles.container}>
            <Pressable onPress={props.handleSubmit} style={styles.button}>
                <Text>
                    Submit
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '100%',
        shadowColor: '#403a08',
        elevation: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8FF',
    },
    container: {
        alignItems: 'center',
        marginTop: 10,
        width: '60%',
        // backgroundColor: 'red',
    },
});

export default ButtonSubmit;
