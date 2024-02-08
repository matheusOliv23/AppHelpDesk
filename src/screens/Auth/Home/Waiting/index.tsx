import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import * as S from './styles';
import Card from 'src/components/shared/Card';
import { useTheme } from 'styled-components/native';
import { Button } from 'src/components/shared/Button';
import { useQuery } from '@tanstack/react-query';
import { SolicitationService } from 'src/services/solicitation.service';
import { Loading } from 'src/components/shared/Loading';
import EmptyList from 'src/components/shared/EmptyList';

export default function Waiting(navigation: any) {
  const { COLORS } = useTheme();
  const { data: solicitations, isPending } = useQuery({
    queryKey: ['solicitations'],
    queryFn: () => SolicitationService.getSolicitations(String(1)),
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <S.Container>
      <FlatList
        data={solicitations.data.filter(
          (item: ISolicitationResponse) => item.status === 'open'
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => {
          return (
            <Card
              time={item.time}
              title={item.title}
              borderLeftColor={COLORS.YELLOW_500}
              icon={
                <Image
                  source={require('src/assets/icons/compass.png')}
                  alt='Compass icon'
                />
              }
            />
          );
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '95%',
          right: 20,
          width: '100%',
        }}
      >
        <Button
          onPress={() => navigation.navigate('Solicitação')}
          title='Nova solicitação'
        />
      </TouchableOpacity>
    </S.Container>
  );
}
