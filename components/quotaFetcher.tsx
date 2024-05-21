import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import {QuotaTopic} from '../quotaInterfaces'
import {TopicSection} from '../components/topicSection'

const QuotaFetcher = () => {
  const [data, setData] = useState<QuotaTopic[]>(null);

  const renderItem = ({ item }) => {
    const daysValues : {completed: number, planned: number}[] = item.daysValues;
    const totalCompleted = daysValues.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.completed;
    }, 0);

    return (
        <FlatList
          data={data}
          renderItem={({ item }) => <TopicSection item={item} />}
          keyExtractor={(item) => item.name}
        />
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dull-erin-quail-toga.cyclic.app/myFile.txt');
      const jsonData: QuotaTopic[] = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data) {
    return <Text>Data is null</Text>; // Render a message if data is null
  }

return (
  <View>

    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

};


export default QuotaFetcher;