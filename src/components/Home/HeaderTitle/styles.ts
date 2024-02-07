import { View } from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 16px 24px;
`;
