import { Text, TextInput, View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  error?: string;
}

export const Container = styled(View)<Props>`
  ${({ theme, error }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    min-height: 56px;
    max-height: 56px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${error ? theme.COLORS.RED_ERROR : theme.COLORS.GRAY_100};
    border-color: ${error ? theme.COLORS.RED_ERROR : theme.COLORS.GRAY_100};
    border-width: ${error ? '1px' : '0px'};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-radius: 6px;
    padding: 16px;
    width: 100%;
  `}
`;

export const CustomInput = styled(TextInput)<Props>`
  ${({ theme, error }) => css`
    color: ${error ? theme.COLORS.RED_ERROR : theme.COLORS.GRAY_100};
    width: 100%;
    border-color: ${error ? theme.COLORS.RED_ERROR : theme.COLORS.GRAY_500};
  `}
`;

export const ErrorText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_ERROR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
