import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'styled-components/native';

interface Props {
  statusText: string;
  statusColor: string;
  statusIcon: ReactNode;
}

export default function HeaderStatus({
  statusColor,
  statusText,
  statusIcon,
}: Props) {
  const { COLORS } = useTheme();
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY_500,
        height: 54,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      {statusIcon}
      <Text style={{ color: statusColor || COLORS.YELLOW_500, fontSize: 14 }}>
        {statusText}
      </Text>
    </View>
  );
}
