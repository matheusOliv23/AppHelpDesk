import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Title = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
