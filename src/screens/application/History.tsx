import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'
import { Text, Heading, SectionList, VStack } from 'native-base'
import { useState } from 'react'

export function History() {
    const [exercises, SetExercises] = useState([
        {
            title: "14.02.23",
            data: ["Ovo direito", "Ovo esquerdo"]
        },
        {
            title: "18.02.23",
            data: ["Mozovo"]
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios" />

            <SectionList
                px={5}
                showsVerticalScrollIndicator={false}
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrados ainda.{'\n'}
                        Vamos fazer exercícios hoje?
                    </Text>
                )}
            />


        </VStack>
    )
}




/**
 *   
 * 
 */