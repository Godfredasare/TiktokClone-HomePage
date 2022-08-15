import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootStack from './src/routes';




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <RootStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
    },
});
