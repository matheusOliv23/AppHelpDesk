import { Text, TextInput, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(View)`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    min-height: 56px;
    max-height: 56px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-radius: 6px;
    padding: 16px;
    width: 100%;
  `}
`;

export const CustomInput = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    width: 100%;
    border-color: ${theme.COLORS.GRAY_500};
  `}
`;

export const ErrorText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_ERROR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
