import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Center, Heading, ScrollView, Skeleton, Text, useToast, VStack } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 33;

export function Profile() {

    const [photoIsLoading, setIsPhotoLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://avatars.githubusercontent.com/u/69445570?v=4')

    const toast = useToast()

    async function HandleUserPhotoSelecte() {

        setIsPhotoLoading(true)
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,

            });

            if (photoSelected.canceled) {
                return;
            }

            if (photoSelected.assets[0].uri) {

                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

                if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                    return toast.show({
                        title: 'Essa imagem é muito grande. Escolha uma de até 5MB',
                        placement: 'top',
                        bgColor: 'red.500'
                    })
                }

                setUserPhoto(photoSelected.assets[0].uri)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsPhotoLoading(false)
        }

    }

    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil' />
            <ScrollView
                contentContainerStyle={{ paddingBottom: 28 }}
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
                                source={{ uri: userPhoto }}
                                size={PHOTO_SIZE}
                            />
                    }

                    <TouchableOpacity onPress={HandleUserPhotoSelecte}>
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
                        fontFamily="heading"
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