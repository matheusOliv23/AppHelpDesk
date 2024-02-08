import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import * as S from './styles';
import Card from 'src/components/shared/Card';
import { useTheme } from 'styled-components/native';
import { Button } from 'src/components/shared/Button';
import { Loading } from 'src/components/shared/Loading';
import EmptyList from 'src/components/shared/EmptyList';
import { useNavigation } from '@react-navigation/native';
import { useListSolicitations } from 'src/hooks/useListSolicitations';

export default function Finished() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const { solicitations, isPending } = useListSolicitations();

  if (isPending) {
    return <Loading />;
  }

  return (
    <S.Container>
      <FlatList
        data={solicitations.data.filter(
          (item: ISolicitationResponse) => item.status === 'closed'
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => {
          return (
            <Card
              time={item.time}
              title={item.title}
              borderLeftColor={COLORS.GREEN_700}
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
