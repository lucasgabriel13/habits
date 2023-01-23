import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { api } from '../lib/axios';

import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { Checkbox } from '../components/Checkbox';
import { Loading } from '../components/Loading';
import { generateProgressPercentage } from '../utils/generate-progress-percentage';
import { HabitsEmpty } from '../components/HabitsEmpty';

interface Props {
  date: string;
}

interface DayInfoPros {
  completedHabits: string[];
  possibleHabits: {
    id: string;
    title: string;
  }[]
}

export function Habit() {
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoPros | null>(null);
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  const route = useRoute();
  const { date } = route.params as Props;

  const parseDate = dayjs(date);
  const dayOfWeek = parseDate.format('dddd');
  const dayAnMonth = parseDate.format('DD/MM');

  const isDateInPast = parseDate.endOf('day').isBefore(new Date());

  const habitsProgress = dayInfo?.possibleHabits.length
    ? generateProgressPercentage(dayInfo?.possibleHabits.length, completedHabits.length)
    : 0;

  async function fetchHabits() {
    try {
      setLoading(true);
      const response = await api.get('/day', { params: { date } });

      setDayInfo(response.data);
      setCompletedHabits(response.data.completedHabits);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível carregar as informações do hábito.');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {
      await api.patch(`/habits/${habitId}/toggle`);
      
      if (completedHabits.includes(habitId)) {
        setCompletedHabits(prevState => prevState.filter(id => id !== habitId))
      } else {
        setCompletedHabits(prevState => [...prevState, habitId]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível atualizar o status do  hábito.");
    }

  }

  useEffect(() => {
    fetchHabits();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>
        <Text className="text-white font-extrabold text-3xl">
          {dayAnMonth}
        </Text>

        <ProgressBar
          progress={habitsProgress}
        />

        <View className={clsx("mt-6", {
          "opacity-50": isDateInPast
        })}>
          {
            dayInfo?.possibleHabits ?
              dayInfo?.possibleHabits.map((habit) => (
                <Checkbox
                  key={habit.id}
                  title={habit.title}
                  checked={completedHabits.includes(habit.id)}
                  onPress={() => handleToggleHabit(habit.id)}
                  disabled={isDateInPast}
                />
              )) :
              <HabitsEmpty />
          }
        </View>
        {
          isDateInPast &&
          <Text className="text-white mt-10 text-center">
            Você não pode editar hábitos de uma data passada.
          </Text>
        }
      </ScrollView>
    </View>
  )
}