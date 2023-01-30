import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import GetDone from './authentication/GetDone';
import Registration from './authentication/registration';
import Login from './authentication/login';
import store from './plugins/store';
import DrawBar from './screen/DrawBar';
import About from './screen/About';
import FAQ from './screen/FAQ';
import Instructions from './screen/Instructions';
import YourDevices from './screen/YourDevices';
import History from './screen/History';
import Devices from './screen/Devices'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetDone" screenOptions={{headerShown:false}}>
                <Stack.Screen name="GetDone" component={GetDone} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DrawBar" component={DrawBar} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name= "Devices"  component={Devices}/>
                <Stack.Screen name= "FAQ's" component={FAQ}/>
                <Stack.Screen name= "Log Out" component={Login}/>
                <Stack.Screen name= "Instructions" component={Instructions}/>
                <Stack.Screen name= "History" component={History} />
                <Stack.Screen name= "Your Devices" component={YourDevices} />



      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
