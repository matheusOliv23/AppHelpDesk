import React from 'react';
import { Image, Pressable, View, Text } from 'react-native';
import * as S from './styles';
import Title from 'src/components/shared/Title';
import { useTheme } from 'styled-components/native';

export default function HeaderTitle() {
  const { COLORS } = useTheme();
  return (
    <View>
      <S.HeaderContainer>
        <Image source={require('src/assets/logo_horizontal.png')} />
        <Pressable>
          <Image source={require('src/assets/icons/sign-out.png')} />
        </Pressable>
      </S.HeaderContainer>
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
    </View>
  );
}
