import { ScreenHeader } from '@components/ScreenHeader'
import { Center, ScrollView, Text, VStack } from 'native-base'
import { UserPhoto } from '@components/UserPhoto';

export function Profile() {
    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil' />

            <ScrollView>
                <Center mt={6} px={10} >
                    <UserPhoto
                        alt='Foto do usuário'
                        source={{ uri: 'https://avatars.githubusercontent.com/u/69445570?v=4' }}
                        size={33}
                    />
                </Center>
            </ScrollView>
        </VStack>
    )
}