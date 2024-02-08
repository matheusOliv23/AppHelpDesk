import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Loading } from 'src/components/shared/Loading';
import { SolicitationService } from 'src/services/solicitation.service';
import * as S from './styles';
import HeaderStatus from 'src/components/Solicitation/HeaderStatus';
import { useTheme } from 'styled-components/native';
import CardFilled from 'src/components/Solicitation/CardFilled';
import { Button } from 'src/components/shared/Button';
import { useCloseSolicitation } from 'src/hooks/useCloseSolicitation';
import { ErrorText } from 'src/components/shared/Input/styles';

export default function OpenSolicitation() {
  const params: any = useRoute().params;
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const {
    onSubmit,
    isPending,
    error,
    isLoadingData,
    solution,
    setSolution,
    solicitations,
  } = useCloseSolicitation(navigation, params.id);

  if (isLoadingData) {
    return <Loading />;
  }

  return (
    <S.Container>
      <HeaderStatus
        statusColor={COLORS.YELLOW_500}
        statusText='EM ANDAMENTO'
        statusIcon={
          <Image
            source={require('src/assets/icons/compass.png')}
            alt='Compass icon'
          />
        }
      />
      <S.Content>
        <CardFilled
          title='EQUIPAMENTO'
          text={solicitations?.title}
          icon={
            <Image
              source={require('src/assets/icons/equip.png')}
              alt='equipament icon'
            />
          }
        />
        <CardFilled
          title='DESCRIÇÃO DO PROBLEMA'
          text={solicitations?.description}
          time={solicitations?.created_at}
          icon={
            <Image
              source={require('src/assets/icons/note.png')}
              alt='equipament icon'
            />
          }
        />
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: COLORS.GRAY_600,
            borderRadius: 8,
            marginBottom: 6,
            gap: 4,
            height: '100%',
            minHeight: 150,
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 6,
              gap: 4,
            }}
          >
            <Image
              source={require('src/assets/icons/check.png')}
              alt='equipament icon'
            />
            <Text style={{ color: COLORS.GRAY_300, fontSize: 14 }}>
              SOLUÇÃO
            </Text>
          </View>
          <S.InputCustom
            multiline
            maxLength={200}
            placeholderTextColor={COLORS.GRAY_200}
            onChangeText={(e) => setSolution(e)}
            placeholder='Digite a solução'
            style={{
              textAlignVertical: 'top',
              marginBottom: 16,
            }}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </View>
      </S.Content>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '93%',
          width: '100%',
          padding: 20,
        }}
      >
        <Button
          isLoading={isPending}
          onPress={() => onSubmit(solution)}
          title='Finalizar'
        />
      </TouchableOpacity>
    </S.Container>
  );
}
