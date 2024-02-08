import { View } from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const TextContent = styled(View)`
  text-align: center;
`;
