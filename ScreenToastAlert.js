import { View, Text,ToastAndroid,Alert,Button,StyleSheet} from 'react-native'
import React from 'react'

const ScreenToastAlert = () => {
  return (
    <View style={styles.container}>
      <Button title='este es un toast' onPress={() => showToastWithGravity()}/>

      <Button title='este es un alert' onPress={() => createTwoButtonAlert()}/>
    </View>

  )
}


const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );



  const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }


  })

export default ScreenToastAlert