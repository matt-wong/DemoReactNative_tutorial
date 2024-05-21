import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Pressable } from "react-native";
import Collapsible from "react-native-collapsible";
import { QuotaTopic } from "../quotaInterfaces";


const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fff',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 0,
      borderRadius: 5,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    itemTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]


export const TopicSection = ({ item, totalCompleted, updateItem }: {
    item: QuotaTopic,
    totalCompleted: number,
    updateItem(QuotaTopic)
}) => {

    const handlePress = (dayIndex: number) => {
        item.daysValues[dayIndex].completed += 1;
        console.log(item.daysValues[dayIndex].completed);
        updateItem(item);
      };

    const styles = StyleSheet.create({
        item: {
            padding: 5,
            margin: 5,
            backgroundColor:'#9cdcfe'
        },
        itemTitle: {
            fontSize: 20,
            fontWeight: "600"
        },
        dayName: {
         fontSize: 15,
         fontWeight: "500"
        }
       });

    const [collapsed, setCollapsed] = useState(true);
  
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
          <Text style={styles.itemTitle}>{item.name} : {totalCompleted} / {item.quota}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          {item.daysValues.map((dayValue, index) => (
            <>
            <Text style= {styles.dayName}>{dayNames[index]}</Text>
            <Pressable onPress={() => handlePress(index)}>
                <Text key={index}>Completed: {dayValue.completed}</Text>
            </Pressable>
            <Text key={index}>Planned: {dayValue.planned}</Text>
            </>
          ))}
        </Collapsible>
      </View>
    );

  };