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
import { useState } from 'react';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){

  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

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


