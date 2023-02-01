import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, Button} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <TouchableOpacity>
        <Image fadeDuration={1000} source={{uri: 'https://picsum.photos/200/300', width: 200, height: 300}}/>
      </TouchableOpacity>
      <Button title='Click Me' onPress={() => console.log('hi')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefae0',
    paddingTop: 16
  },
});
