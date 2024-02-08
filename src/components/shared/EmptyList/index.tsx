import React from 'react';
import { View, Image } from 'react-native';
import * as S from './styles';

export default function EmptyList() {
  return (
    <S.Container>
      <Image source={require('src/assets/icons/cloud.png')} />
      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <S.Title>Você ainda não tem</S.Title>
        <S.Title>chamados criados</S.Title>
      </View>
    </S.Container>
  );
}
