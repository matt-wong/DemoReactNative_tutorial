import { Image, StyleSheet, View } from 'react-native';
import QuotaFetcher from './components/quotaFetcher';

export default function App() {

  const styles = StyleSheet.create({
    app: {
     padding: 25,
    },
    item: {
      height: 100,
      width: 100,
      alignSelf: 'center'
    }
   });

  return (
    <View style={styles.app}>
      <Image style={styles.item} source={require('./assets/icon.png')}></Image>
      <QuotaFetcher></QuotaFetcher>
    </View>
  );
}
