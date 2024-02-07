import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0 0px;
`;
