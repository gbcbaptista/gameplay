import React from 'react';
import { 
  View, 
  FlatList
} from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){

  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Lendários 2',
      icon: 'image.png',
      owner: false
    },{
      id: '3',
      name: 'Lendários 3',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'Lendários 4',
      icon: 'image.png',
      owner: false
    },
    {
      id: '5',
      name: 'Lendários 5',
      icon: 'image.png',
      owner: true
    },
    {
      id: '6',
      name: 'Lendários 6',
      icon: 'image.png',
      owner: false
    },
    {
      id: '7',
      name: 'Lendários 7',
      icon: 'image.png',
      owner: true
    },
    {
      id: '8',
      name: 'Lendários 8',
      icon: 'image.png',
      owner: false
    }
  ]

  return (

      <View style={styles.container}>
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild 
              data={item}
              onPress={() => handleGuildSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 68, paddingTop: 103 }}
          ListHeaderComponent={() => <ListDivider widthPercent={'70%'} isCentered/>}
          ItemSeparatorComponent={() => <ListDivider widthPercent={'70%'} isCentered/>}
          style={styles.guilds}
        />
      </View>

  );
}


