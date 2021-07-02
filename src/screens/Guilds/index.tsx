import React from 'react';
import { 
  View, 
  FlatList
} from 'react-native';
import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { useState } from 'react';
import Load from '../../components/Load';
import { api } from '../../services/api';
import { useEffect } from 'react';


type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){

  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGuilds = async () => {
    const response = await api.get('/users/@me/guilds')
    

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect( () => {
    fetchGuilds();
  }, [])

  return (

      <View style={styles.container}>
        { loading ? <Load /> :
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
            contentContainerStyle={{paddingBottom: 68, marginTop: 68 }}
            ListHeaderComponent={() => <ListDivider widthPercent={'70%'} isCentered/>}
            ItemSeparatorComponent={() => <ListDivider widthPercent={'70%'} isCentered/>}
            style={styles.guilds}
          />
        }
      </View>

  );
}


