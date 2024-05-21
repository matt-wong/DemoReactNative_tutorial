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
        <TopicSection item={item} totalCompleted={totalCompleted} updateItem={(i) => {
          console.log(i);
          setData([...data, item]);
          setApiData();
        }}/>
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
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!data) {
    return <Text>Data is null</Text>; // Render a message if data is null
  }

  const setApiData = async () => {
    // try {
    //   fetch('https://dull-erin-quail-toga.cyclic.app/myFile.txt', {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //       console.log(JSON.stringify(responseData));
    //     })
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  };

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