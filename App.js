import { createStackNavigator } from "@react-navigation/stack";
import Initial from "./pages/initial";
import Home from "./pages/home";
import DetailNotice from "./pages/detailNotice";
import Notice from "./pages/notice";
import { useFonts } from 'expo-font';
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Imbue': require('./assets/fonts/Imbue.ttf'),
    'Imbue2': require('./assets/fonts/Imbue2.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  if (!loaded) {
    return <Text>Fontes não carregaram.</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={Initial} options={{headerTitle: '', headerStyle:{ height: 0}}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Noticia" component={Notice} />
        <Stack.Screen name="Noticia Detalhada" component={DetailNotice} />
      </Stack.Navigator>
    </NavigationContainer>
  );



}
