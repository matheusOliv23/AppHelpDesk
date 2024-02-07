import React from 'react';
import Title from 'src/components/shared/Title';
import { View, Text } from 'react-native';
import * as S from './styles';
import { useTheme } from 'styled-components/native';

export default function HeaderSolicitation() {
  const { COLORS } = useTheme();
  return (
    <S.Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title title='Solicitações' />
        <Text style={{ color: COLORS.GRAY_200 }}>0</Text>
      </View>
    </S.Container>
  );
}
