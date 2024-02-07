import React from 'react';
import * as S from './styles';
import Logo from 'src/components/shared/Logo';
import { useTheme } from 'styled-components/native';
import { Controller } from 'react-hook-form';
import { Input } from 'src/components/shared/Input';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Button } from 'src/components/shared/Button';
import { Link } from '@react-navigation/native';
import { Text } from 'react-native';
import Title from 'src/components/shared/Title';
import { useLogin } from 'src/hooks/useLogin';
import { ErrorText } from 'src/components/shared/Input/styles';

export default function Login() {
  const { COLORS } = useTheme();
  const { onSubmit, isPending, control, handleSubmit, errors, error } =
    useLogin();

  return (
    <S.Container>
      <S.Content>
        <Logo />
        <S.Form>
          <Title title='Acesse sua conta' />
          {error && <ErrorText>{error}</ErrorText>}
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={35}
                placeholder='Email'
                errorText={errors.email?.message}
                icon={
                  <Fontisto name='email' size={16} color={COLORS.GRAY_300} />
                }
              />
            )}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={35}
                secureTextEntry
                placeholder='Senha'
                errorText={errors.password?.message}
                icon={<Octicons name='key' size={16} color={COLORS.GRAY_300} />}
              />
            )}
          />
          <Button
            isLoading={isPending}
            onPress={handleSubmit(onSubmit)}
            title='Entrar'
          />
          <Text style={{ fontSize: 16, color: COLORS.GRAY_300 }}>
            Não tem cadastro?{' '}
            <Link to={'/register'} style={{ color: COLORS.WHITE }}>
              Criar conta
            </Link>
          </Text>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
