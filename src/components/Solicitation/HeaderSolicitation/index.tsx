import React from 'react';
import { Image, Pressable } from 'react-native';
import Title from 'src/components/shared/Title';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export default function HeaderSolicitation() {
  const navigation = useNavigation();
  return (
    <S.HeaderContainer>
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
    </S.HeaderContainer>
  );
}
