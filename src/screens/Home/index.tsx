import React, { useState } from "react";
import { 
  View,
  FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Appointments } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from './styles';
import { ScrollView } from "react-native-gesture-handler";

export function Home(){
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Gabriel',
        icon: null,
        owner: false
      },
      category: '2',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Raquel',
        icon: null,
        owner: true
      },
      category: '3',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Carlos',
        icon: null,
        owner: false
      },
      category: '4',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Teste',
        icon: null,
        owner: false
      },
      category: '4',
      date: '22/06 ás 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]
  
  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentDetails')
  }

  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate')
  }
  
  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background >
      {/* <ScrollView 
      contentContainerStyle={{ paddingBottom: 40 }}> */}
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader 
            title='Partidas agendadas'
            
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList 
              data={appointments}
              keyExtractor={ item => item.id}
              renderItem={({ item }) => (
                <Appointments 
                  data={item}
                  onPress={handleAppointmentDetails}
                />
            )}
              ItemSeparatorComponent={() => <ListDivider />}
              style={styles.matches}
              showsVerticalScrollIndicator = {false}
          />
        </View>
      {/* </ScrollView> */}
    </Background>
  )
}



