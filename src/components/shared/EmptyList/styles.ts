import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
