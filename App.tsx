import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import { NativeBaseProvider } from 'native-base';
import { StatusBar, View } from 'react-native';
import { Home } from '@screens/application/Home';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? < Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}


//