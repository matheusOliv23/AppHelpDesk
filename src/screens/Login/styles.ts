import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 36px;
`;

export const Content = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(View)`
  flex: 1;
  align-items: center;
  margin-top: 80px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
