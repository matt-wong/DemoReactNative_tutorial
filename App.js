import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Goal'></TextInput>
        <Button title='Add Goal'></Button>
      </View>
      
      <View>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 app: {
  padding: 50,
 },
 inputContainer: {
  display: 'flex',
  flexDirection: 'row'
},
textInput: {
  borderWidth: 1,
  borderColor: '#cccccc',
  width: '80%',
  marginRight: 5,
  paddingHorizontal: 10
}
});
