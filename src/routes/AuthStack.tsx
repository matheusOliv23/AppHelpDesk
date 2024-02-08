import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import HeaderTitle from 'src/components/Home/HeaderTitle';
import Waiting from 'src/screens/Auth/Home/Waiting';
import Finished from 'src/screens/Auth/Home/Finished';

import { SafeAreaView } from 'react-native-safe-area-context';
import Solicitation from 'src/screens/Auth/Solicitation';

import HeaderSolicitation from 'src/components/Solicitation/HeaderSolicitation';
import OpenSolicitation from 'src/screens/Auth/OpenSolicitation';
import FinishedSolicitation from 'src/screens/Auth/FinishedSolution';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function AuthRoutes() {
  const { COLORS } = useTheme();

  function Home() {
    return (
      <Tab.Navigator
        style={{ backgroundColor: COLORS.GRAY_700 }}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLORS.GRAY_700,
            borderBottomColor: COLORS.YELLOW_500,
          },
          tabBarLabelStyle: {
            borderWidth: 1,
            color: COLORS.WHITE,
            fontSize: 10,
          },
          tabBarActiveTintColor: 'transparent',
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Tab.Screen name='Em andamento' component={Waiting} />
        <Tab.Screen name='Finalizados' component={Finished} />
      </Tab.Navigator>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <Navigator>
        <Screen
          name='home'
          component={Home}
          options={{
            headerStyle: { backgroundColor: COLORS.GRAY_300 },
            header: () => (
              <SafeAreaView>
                <HeaderTitle />
              </SafeAreaView>
            ),
          }}
        />
        <Screen
          name='Solicitação'
          component={Solicitation}
          options={{
            header: () => (
              <SafeAreaView>
                <HeaderSolicitation />
              </SafeAreaView>
            ),
          }}
        />
        <Screen
          name='Solução'
          component={OpenSolicitation}
          options={{
            header: () => (
              <SafeAreaView>
                <HeaderSolicitation />
              </SafeAreaView>
            ),
          }}
        />
        <Screen
          name='Concluído'
          component={FinishedSolicitation}
          options={{
            header: () => (
              <SafeAreaView>
                <HeaderSolicitation />
              </SafeAreaView>
            ),
          }}
        />
      </Navigator>
    </View>
  );
}
