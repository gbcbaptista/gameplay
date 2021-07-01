import React from 'react';
import { Fontisto } from "@expo/vector-icons";
import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';
import BannerImg from '../../assets/banner.png';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails(){
  
  const members =[
    {
      id: '1',
      username: 'Gabriel',
      avatar_url: 'https://github.com/gbcbaptista.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Lucas',
      avatar_url: 'https://github.com/lucasTMP.png',
      status: 'offline'
    },
    {
      id: '3',
      username: 'Raquel',
      avatar_url: 'https://media-exp3.licdn.com/dms/image/C4D03AQG6qb1uocvTKA/profile-displayphoto-shrink_200_200/0/1618360943455?e=1630540800&v=beta&t=qL0KzMMjO8u3Iu6V4ov0ey2ZCRKhfgfj67D8sGkpmyk',
      status: 'online'
    },
  ]

  return (
    <Background>
      <Header 
        title={'Detalhes'}
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
          }
      />
      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title='Jogadores'
        subtitle={`Total ${members.length}`}
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member  data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider widthPercent={'78%'} />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title={'Entrar na partida'} />
      </View>

    </Background>
  );
}