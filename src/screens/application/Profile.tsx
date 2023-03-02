import { ScreenHeader } from '@components/ScreenHeader';
import { Input } from '@components/Input';
import { UserPhoto } from '@components/UserPhoto';
import { Center, Heading, ScrollView, Skeleton, Text, VStack } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33;

export function Profile() {

    const [photoIsLoading, setIsPhotoLoading] = useState(false);

    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil' />
            <ScrollView
            contentContainerStyle={{paddingBottom: 28}}
            >
                <Center mt={6} px={10} >
                    {
                        photoIsLoading ?
                            <Skeleton
                                w={PHOTO_SIZE}
                                h={PHOTO_SIZE}
                                rounded="full"
                                startColor="gray.500"
                                endColor="gray.400"

                            />
                            :
                            <UserPhoto
                                alt='Foto do usuário'
                                source={{ uri: 'https://avatars.githubusercontent.com/u/69445570?v=4' }}
                                size={PHOTO_SIZE}
                            />
                    }

                    <TouchableOpacity>
                        <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8} >
                            Alterar foto
                        </Text>
                    </TouchableOpacity>

                    <Input
                        bg="gray.600"
                        placeholder='Nome'
                    />

                    <Input
                        bg="gray.600"
                        value='E-mail'
                        isDisabled
                    />

                    <Heading
                        mt={8}
                        alignSelf="flex-start"
                        color="gray.200"
                        fontSize="md" mb={2}>
                        Alterar senha
                    </Heading>

                    <Input
                        bg="gray.600"
                        placeholder="Senha antiga"
                        secureTextEntry
                    />
                    <Input
                        bg="gray.600"
                        placeholder="Nova senha"
                        secureTextEntry
                    />
                    <Input
                        bg="gray.600"
                        placeholder="Confirme a nova senha"
                        secureTextEntry
                    />

                    <Button
                        mt={5}
                        title='Atualizar'
                    />
                </Center>
            </ScrollView>
        </VStack>
    )
}