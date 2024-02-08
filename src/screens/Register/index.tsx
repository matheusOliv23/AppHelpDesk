import React from 'react';
import { Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import Logo from 'src/components/shared/Logo';
import Title from 'src/components/shared/Title';
import { Input } from 'src/components/shared/Input';
import { useTheme } from 'styled-components';
import { Button } from 'src/components/shared/Button';

import { Controller } from 'react-hook-form';
import { Link } from '@react-navigation/native';
import { useRegister } from 'src/hooks/useRegister';

export default function Register() {
  const { COLORS } = useTheme();
  const { onSubmit, isPending, control, handleSubmit, errors } = useRegister();

  return (
    <S.Container>
      <S.Content>
        <Logo />
        <S.Form>
          <Title title='Faça seu cadastro' />
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={35}
                placeholder='Nome'
                errorText={errors.name?.message}
                styleContainer={{ marginLeft: 10, marginRight: 10 }}
                icon={
                  <Ionicons
                    name='person-circle'
                    size={16}
                    color={COLORS.GRAY_300}
                  />
                }
              />
            )}
          />
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
                styleContainer={{ marginLeft: 10, marginRight: 10 }}
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
                styleContainer={{ marginLeft: 10, marginRight: 10 }}
                icon={<Octicons name='key' size={16} color={COLORS.GRAY_300} />}
              />
            )}
          />
          <Controller
            control={control}
            name='password_confirmation'
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={35}
                secureTextEntry
                placeholder='Confirme sua senha'
                errorText={errors.password_confirmation?.message}
                styleContainer={{ marginLeft: 10, marginRight: 10 }}
                icon={<Octicons name='key' size={16} color={COLORS.GRAY_300} />}
              />
            )}
          />
          <Button
            isLoading={isPending}
            onPress={handleSubmit(onSubmit)}
            title='Cadastrar'
          />
          <Text style={{ fontSize: 16, color: COLORS.GRAY_300 }}>
            Já tem uma conta?{' '}
            <Link to={'/login'} style={{ color: COLORS.WHITE }}>
              Entrar
            </Link>
          </Text>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
