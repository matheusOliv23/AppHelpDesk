import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import theme from 'src/styles/theme';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size='small' color={theme.COLORS.GRAY_500} />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
}
