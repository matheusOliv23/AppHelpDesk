import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 24px;
  gap: 16px;
`;

export const InputCustom = styled(TextInput)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  flex: 1;
`;
