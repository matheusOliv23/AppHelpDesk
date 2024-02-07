import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  borderLeftColor?: string;
}

export const Container = styled(View)<ContainerProps>`
  ${({ theme, borderLeftColor }) => css`
    color: ${theme.COLORS.WHITE};
    border-left-width: 4px;
    border-radius: 6px;
    width: 100%;
    background-color: ${theme.COLORS.GRAY_600};
    border-left-color: ${borderLeftColor || theme.COLORS.GREEN_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    height: 88px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 16px;
  `}
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 48px;
    height: 48px;
    background-color: ${theme.COLORS.GRAY_500};
  `}
`;
