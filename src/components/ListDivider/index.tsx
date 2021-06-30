import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  isCentered?: boolean;
  widthPercent: string;
}

export function ListDivider({ isCentered, widthPercent }: Props){
  return (
    <View 
    style={[
      styles.container,
      { width: widthPercent},
      isCentered 
      ? { marginVertical: 12 } 
      : { marginTop: 2, marginBottom: 31 }
  ]} />
  );
}