import { useNavigation } from '@react-navigation/native';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Center, Heading, Image, Text, VStack, ScrollView, useToast } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import { api } from '@services/api';
import { AppError } from '@utils/AppError';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

// Validação atraves de schemas, utilizando o yup 
const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
    password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
    password_confirm: yup.string().required('Informe a senha.').oneOf([yup.ref('password'), null], 'A senha informada é diferente da anterior.')
})

export function SignUp() {
    const navigation = useNavigation();
    const toast = useToast();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    async function handleSignUp({ name, email, password }: FormDataProps) {
        // API de criação de usuários
        try {
            const response = await api.post('/users', { name, email, password });
            console.log(response.data);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Não foi possivel criar a conta. Tente novamente mais tarde'
           
            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            })
        }
    }

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={8} pb={16}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
                    alt="Pessoas treinando"
                    resizeMode='contain'
                    position="absolute"
                />

                <Center my={24}>
                    <LogoSvg />
                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >
                        Crie sua conta
                    </Heading>

                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='Nome'
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='E-mail'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='Senha'
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password_confirm"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='Confirmar a senha'
                                secureTextEntry
                                onChangeText={onChange}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                                value={value}
                                errorMessage={errors.password_confirm?.message}
                            />
                        )}
                    />

                    <Button
                        title='Criar e acessar'
                        onPress={handleSubmit(handleSignUp)}
                    />
                </Center>

                <Button
                    mt={12}
                    title='Voltar para o login'
                    variant="outline"
                    onPress={handleGoBack}
                />

            </VStack>
        </ScrollView>
    )
}