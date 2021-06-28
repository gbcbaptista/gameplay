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
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.guilds}
        />
      </View>

  );
}


