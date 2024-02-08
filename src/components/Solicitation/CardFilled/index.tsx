import React from 'react';
import { Text, View } from 'react-native';
import { formatDateToDayMonthYearTime } from 'src/utils/date-formatters';
import { useTheme } from 'styled-components/native';

interface Props {
  title: string;
  text: string;
  icon: React.ReactNode;
  time?: string;
}

export default function CardFilled({ title, text, icon, time }: Props) {
  const { COLORS } = useTheme();
  return (
    <View
      style={{
        minHeight: 96,
        width: '100%',
        backgroundColor: COLORS.GRAY_600,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
          gap: 4,
        }}
      >
        {icon}
        <Text style={{ color: COLORS.GRAY_300, fontSize: 14 }}>{title}</Text>
      </View>
      <Text style={{ color: COLORS.GRAY_100 }}>{text}</Text>
      {time && (
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: COLORS.GRAY_500,
            marginBottom: 4,
            paddingTop: 12,
            marginTop: 12,
          }}
        >
          <Text style={{ color: COLORS.GRAY_300, fontSize: 10 }}>
            Registrado em {formatDateToDayMonthYearTime(time)}
          </Text>
        </View>
      )}
    </View>
  );
}
