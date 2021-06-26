import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { styles } from './styles';
import { categories } from "../../utils/categories";
import { Category } from '../Category'

export function CategorySelect(){

  return (
  <ScrollView 
    horizontal
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 40 }}
  >
    {
      categories.map(category => (
        <Category 
          key={category.id}
          title={category.title}
          icon={category.icon}
        />
      ))
    }
    </ScrollView>
)};