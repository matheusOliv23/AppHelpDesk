import React from 'react';
import { Image, Pressable, View, Text } from 'react-native';
import * as S from './styles';
import Title from 'src/components/shared/Title';
import { useTheme } from 'styled-components/native';
import { useAuth } from 'src/context/Auth';
import useCountSolicitations from 'src/store/useCountSolicitations';

export default function HeaderTitle() {
  const { COLORS } = useTheme();
  const { signOut } = useAuth();
  const { number } = useCountSolicitations();

  return (
    <View>
      <S.HeaderContainer>
        <Image source={require('src/assets/logo_horizontal.png')} />
        <Pressable onPress={signOut}>
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
          <Text style={{ color: COLORS.GRAY_200 }}>{number}</Text>
        </View>
      </S.Container>
    </View>
  );
}
