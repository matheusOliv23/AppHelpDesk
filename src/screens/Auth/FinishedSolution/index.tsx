import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { Loading } from 'src/components/shared/Loading';
import * as S from './styles';
import HeaderStatus from 'src/components/Solicitation/HeaderStatus';
import { useTheme } from 'styled-components/native';
import CardFilled from 'src/components/Solicitation/CardFilled';
import { useFinishedSolution } from 'src/hooks/useFinishedSolution';

export default function FinishedSolicitation() {
  const params: any = useRoute().params;
  const { COLORS } = useTheme();
  const { isLoadingData, solicitations } = useFinishedSolution(params.id);

  if (isLoadingData) {
    return <Loading />;
  }

  return (
    <S.Container>
      <HeaderStatus
        statusColor={COLORS.GREEN_700}
        statusText='FINALIZADO'
        statusIcon={
          <Image
            source={require('src/assets/icons/circle.png')}
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
              alt='note icon'
            />
          }
        />
        <CardFilled
          title='SOLUÇÃO'
          text={solicitations?.description}
          time={solicitations?.updated_at}
          icon={
            <Image
              source={require('src/assets/icons/check.png')}
              alt='check icon'
            />
          }
        />
      </S.Content>
    </S.Container>
  );
}
