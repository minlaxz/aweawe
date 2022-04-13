import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import HelloScreen from './screens/Hello';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Wellcame Ta Hooome' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profileee' }}
        />
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{ title: 'Hella' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
