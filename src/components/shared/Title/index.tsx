import React from 'react';
import * as S from './styles';

interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return <S.Title>{title}</S.Title>;
}
