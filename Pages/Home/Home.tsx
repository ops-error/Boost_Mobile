import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-gesture-handler";

function Home(): React.JSX.Element {
    return(
        <View>
            <Pressable style={styles.container}>
                <Text>
                    GAGAGAGA
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    },
});

export default Home;