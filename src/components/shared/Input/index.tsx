import { TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import React, { Ref, forwardRef } from 'react';

type Props = TextInputProps & {
  icon?: React.ReactNode;
  errorText?: string;
};

export const Input = forwardRef((props: Props, ref: Ref<TextInput>) => {
  const { COLORS } = useTheme();

  return (
    <View style={{ marginLeft: 16, marginRight: 16 }}>
      <S.Container>
        {props.icon && props.icon}
        <S.CustomInput
          {...props}
          ref={ref}
          placeholderTextColor={COLORS.GRAY_300}
        />
      </S.Container>
      {props.errorText && <S.ErrorText>{props.errorText}</S.ErrorText>}
    </View>
  );
});
