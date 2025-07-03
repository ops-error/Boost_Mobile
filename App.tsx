import React from "react";
import { Alert, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
// import DeviceInfo from "react-native-device-info";
// import axios from "axios";
import AuthForm from "./Widgets/AuthForm";

// данные для бота

function App(): React.JSX.Element {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* <Text style={styles.title}>
        Здесь должен быть ваш текст
      </Text>
      <Pressable style={styles.button} onPress={() => handleOnPress('/start')}>
        <Text style={styles.textButton}>
          Hi~ o(*￣▽￣*)ブ
        </Text>
      </Pressable> */}
      <AuthForm />
    </View>
  );
};

// const handleOnPress = async (cmd: string) => {
//   // эта хуня работает
//   // код, отправляющий хело ворлд на мкнтрл
//   try {
//     await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
//       chat_id: CHAT_ID,
//       text: cmd,
//     });
//     // Alert.alert('Good Job', `Команда ${cmd} успешно отправлена`);
//     Alert.alert(DeviceInfo.getBrand());
//     // console.log(DeviceInfo.getDeviceName());
//   } catch(err) {
//     Alert.alert('Oh noo', `Ошипка: ${err}`);
//   }
// }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  button: {
    backgroundColor: '#F8F8FF',
    shadowColor: '#403a08',
    maxHeight: 70,
    width: '50%',
    borderRadius: 20,
    elevation: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 900,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
  }
});

export default App;
