import React, { useState, useCallback } from "react";
import { 
  View,
  FlatList
} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Appointments, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { styles } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import Load from "../../components/Load";
import { api } from "../../services/api";


export function Home(){
  const [category, setCategory] = useState('')
  const [ appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  
  const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }

  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate')
  }
  
  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const loadAppointments = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []
    
    if (category){
      setAppointments(storage.filter(item => item.category === category));
    }else{
      setAppointments(storage)
    }
    // console.log('Cleaning all data')
    // await AsyncStorage.setItem(
    //   COLLECTION_APPOINTMENTS,
    //   JSON.stringify([])
    // );
    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  },[category]))

  return (
    <Background >
        <View style={styles.header}>
        
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        {
          loading ? <Load /> :
          <>
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
                  onPress = {() => handleAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider widthPercent={'75%'} />}
              contentContainerStyle={{paddingBottom: 69}}
              style={styles.matches}
              showsVerticalScrollIndicator = {false}
            />
          </>
        }
    </Background>
  )
}



