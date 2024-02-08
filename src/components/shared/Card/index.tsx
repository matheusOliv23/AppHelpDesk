import React, { ReactNode } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { formatDateToDayMonthYearTime } from 'src/utils/date-formatters';

interface Props {
  title: string;
  time: string;
  icon: ReactNode;
  borderLeftColor?: string;
  onPress: () => void;
}

export default function Card({
  title,
  time,
  icon,
  borderLeftColor,
  onPress,
}: Props) {
  const { COLORS } = useTheme();
  return (
    <Pressable onPress={onPress}>
      <S.Container borderLeftColor={borderLeftColor}>
        <View>
          <Text
            style={{ color: COLORS.GRAY_100, fontSize: 14, marginBottom: 4 }}
          >
            {title}
          </Text>
          <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
            <Image source={require('src/assets/icons/clock.png')} />
            <Text style={{ color: COLORS.GRAY_200, fontSize: 10 }}>
              {formatDateToDayMonthYearTime(time)}
            </Text>
          </View>
        </View>
        <S.IconContainer>{icon}</S.IconContainer>
      </S.Container>
    </Pressable>
  );
}
