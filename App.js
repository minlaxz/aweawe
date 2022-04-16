import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HNScreen,
  DetailScreen,
  AboutScreen,
  DeveloperScreen,
  TestScreen
} from './screens';
import store from './features/store';
import { Provider as ReduxProvider } from 'react-redux';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('@expo/snack-static/react-native-logo.png')}
//     />
//   );
// }

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ReduxProvider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F26523',
            },
            headerTintColor: '#fafafa',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Hacker News"
            component={HNScreen}
            options={{ title: 'Hacker News Y/C' }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
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
            options={({ route }) => ({
              title: `Thread: ${route.params.item.id}`,
            })}
          />
          <Stack.Screen
            name="Test"
            component={TestScreen}
            options={{ title: 'Test Runs' }}
          />
        </Stack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  );
}
