import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image
                    source={{ uri: 'https://www.kaisan.com.br/media/blog/post/MJ0419_BP_SidePlank_01_2.jpg' }}
                    alt="Image do exercicio"
                    rounded="md"
                    resizeMode="cover"
                    mr={4}
                    w={16}
                    h={16}
                />

                <VStack flex={1}>
                    <Heading fontSize="lg" color="white"  fontFamily="heading">
                        Barra lateral
                    </Heading>

                    <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
                        3 séries x 12 repetições
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />

            </HStack>
        </TouchableOpacity>
    )
}