import { StyleSheet, TextInput, View } from "react-native";

type InputType = {
    placeholderText: string,
    isSecureText: boolean,
}

function StyledInput(props: InputType): React.JSX.Element {
    return(
        <View style={styles.container}>
            <TextInput
            placeholder={props.placeholderText}
            secureTextEntry={props.isSecureText}
            style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        width: '100%',
        height: 40,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 40,
        // borderWidth: .5,
        borderRadius: 20,
        paddingHorizontal: 17,
        backgroundColor: 'white',
    },
});

export default StyledInput;
