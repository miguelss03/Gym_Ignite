import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, Heading, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
    const [groups, setGroups] = useState(['costas', 'ombros', 'bíceps', 'tríceps']);
    const [groupSelected, setGroupSelected] = useState('costas')

    const [exercises, setExercises] = useState(['1', '2', '3', '4', '5', '6']);

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenExerciseDatails() {
        navigation.navigate('exercise')
    }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                data={groups}
                maxH={10}
                minH={10}
                my={10}
                horizontal
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={String(groupSelected).toUpperCase() === item.toUpperCase()}
                        onPress={() => setGroupSelected(item)}
                    />
                )}
            />

            <VStack flex={1} px={8} >
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        <Text>
                            Exercícios
                        </Text>
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 16 }}
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard
                            onPress={handleOpenExerciseDatails}
                        />
                    )}
                />
            </VStack>
        </VStack>
    )
}




