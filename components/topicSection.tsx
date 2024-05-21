import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
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

export const TopicSection = ({ item }: { item: QuotaTopic }) => {
    const [collapsed, setCollapsed] = useState(true);
  
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
          <Text style={styles.itemTitle}>{item.name}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          {item.daysValues.map((dayValue, index) => (
            <Text key={index}>Completed: {dayValue.completed}, Planned: {dayValue.planned}</Text>
          ))}
        </Collapsible>
      </View>
    );
  };
