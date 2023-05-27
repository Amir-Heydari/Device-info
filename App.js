import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native';
import * as Device from 'expo-device';

export default function App() {

  const {DeviceEventEmitter, Platform} = require('react-native');
  
  return (
    <View style={styles.container}>
      <Text>{Device.isDevice}</Text>
      <Text>Brand: {Device.brand}</Text>
      <Text>Model name: {Device.modelName}</Text>
      <Text>Design name: {Device.designName}</Text>
      <Text>Device year class: {Device.deviceYearClass}</Text>
      <Text>Manufacturer: {Device.manufacturer}</Text>
      <Text>OS: {Device.osName}</Text>
      <Text>OS version: {Device.osVersion} 'api level: {Device.platformApiLevel}'</Text>
      <Text>Cpu Architecture: {Device.supportedCpuArchitectures}</Text>
      <Text>Total memory: {(Device.totalMemory/10/10/10/10/10/10/10/10/10).toFixed(6)}</Text>

      <TouchableOpacity 
      onPress={()=>{
        BackHandler.exitApp()
      }}
      style={{backgroundColor:'red',marginTop:80, borderWidth:2, padding:10, borderRadius:5}}>
          <View>
            <Text>EXIT</Text>
          </View>
      </TouchableOpacity>
      
      
      <StatusBar style="auto" />
    </View>
  );
} ``

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:8
  },
});
