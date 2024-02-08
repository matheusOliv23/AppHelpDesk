import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';

interface Props {
  error?: string;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 24px;
  gap: 16px;
  margin-top: -36px;
`;

export const InputCustom = styled(TextInput)<Props>`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme, error }) =>
    error ? theme.COLORS.RED_ERROR : theme.COLORS.GRAY_100};
  border-color: ${({ theme, error }) =>
    error ? theme.COLORS.RED_ERROR : theme.COLORS.GRAY_100};
  border-width: ${({ error }) => (error ? '1px' : '0px')};
  width: 100%;
  flex: 1;
`;
