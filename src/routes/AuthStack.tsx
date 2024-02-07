import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import Home from 'src/screens/Auth/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <Navigator>
        <Screen name='home' component={Home} />
      </Navigator>
    </View>
  );
}
