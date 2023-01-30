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
import Computer from './screen/Computer';
import Ricecooker from './screen/Ricecooker';
import Flatiron from './screen/Flatiron';
import AC from './screen/AC';
import TV from './screen/TV';
import Laptop from './screen/Laptop';
import Bulb from './screen/Bulb';
import Cfan from './screen/Cfan';
import Ref from './screen/Ref';
import Heater from './screen/Heater';
import EditDevice from './screen/EditDevice';
import Reports from './screen/Reports';
import Profile from './authentication/profile';
import Forgotpassword from './authentication/forgotpassword';
import Verification from './authentication/verification';

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
                <Stack.Screen name= "Computer" component={Computer} />
                <Stack.Screen name= "Ricecooker" component={Ricecooker} />
                <Stack.Screen name= "Flatiron" component={Flatiron} />
                <Stack.Screen name= "AC" component={AC} />
                <Stack.Screen name= "TV" component={TV} />
                <Stack.Screen name= "Laptop" component={Laptop} />
                <Stack.Screen name= "Bulb" component={Bulb} />
                <Stack.Screen name= "Cfan" component={Cfan} />
                <Stack.Screen name= "Ref" component={Ref} />
                <Stack.Screen name= "Heater" component={Heater} />
                <Stack.Screen name= "EditDevice" component={EditDevice} />
                <Stack.Screen name= "Reports" component={Reports} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
                <Stack.Screen name="Verification" component={Verification} />



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
