import React from 'react';
import { Input } from 'src/components/shared/Input';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { Button } from 'src/components/shared/Button';
import { useCreateSolicitation } from 'src/hooks/useCreateSolicitation';
import { Controller } from 'react-hook-form';
import { ErrorText } from 'src/components/shared/Input/styles';
import { RootStackParamList } from 'src/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SolicitationScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Solicitação'
>;

export type SolicitationProps = {
  navigation: SolicitationScreenNavigationProp;
};

export default function Solicitation({ navigation }: SolicitationProps) {
  const { COLORS } = useTheme();
  const { onSubmit, isPending, control, handleSubmit, errors } =
    useCreateSolicitation(navigation);

  return (
    <S.Container>
      <Controller
        control={control}
        name='title'
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={35}
            placeholder='Número do Patrimônio'
            errorText={errors.title?.message}
            style={{ flex: 1 }}
          />
        )}
      />
      <Controller
        control={control}
        name='description'
        render={({ field: { onChange, onBlur, value } }) => (
          <S.InputCustom
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder='Descrição do problema'
            placeholderTextColor={COLORS.GRAY_300}
            error={errors.description?.message}
            multiline
            style={{
              marginTop: 24,
              textAlignVertical: 'top',
              height: '80%',
            }}
          />
        )}
      />
      {errors.description && (
        <ErrorText>{errors.description?.message}</ErrorText>
      )}
      <Button
        onPress={handleSubmit(onSubmit)}
        isLoading={isPending}
        style={{ flex: 1, marginBottom: 10 }}
        title='Cadastrar'
      />
    </S.Container>
  );
}
