import React from 'react';
import { View, Image, Pressable } from 'react-native';
import Title from 'src/components/shared/Title';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function HeaderSolicitation() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY_600,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
      }}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 50,
          left: 20,
        }}
      >
        <Image source={require('src/assets/icons/back.png')} />
      </Pressable>
      <Title title='Solicitação' />
    </View>
  );
}
