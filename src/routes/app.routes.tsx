import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import Register from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='register' component={Register} />
      </Navigator>
    </View>
  );
}
