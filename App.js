import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HNScreen,
  DetailScreen,
  AboutScreen,
  DeveloperScreen,
} from './screens';
import store from './features/store';
import { Provider as ReduxProvider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Hacker News"
            component={HNScreen}
            options={{ title: 'Hacker News' }}
          />
          <Stack.Screen
            name="Developer"
            component={DeveloperScreen}
            options={{ title: 'Developer' }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: 'About' }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: 'Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
