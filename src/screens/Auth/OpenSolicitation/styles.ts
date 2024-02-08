import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-top: -50px;
`;

export const Content = styled(ScrollView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
  gap: 16px;
  flex-direction: column;
`;

export const InputCustom = styled(TextInput)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;
`;
