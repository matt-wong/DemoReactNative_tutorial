import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import QuotaFetcher from './components/quotaFetcher';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function goalButtonHandler(){
    console.log(enteredGoalText);
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.app}>
      <QuotaFetcher></QuotaFetcher>
    </View>
  );
}

const styles = StyleSheet.create({
 app: {
  padding: 50,
 }
});
