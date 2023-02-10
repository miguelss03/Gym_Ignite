import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from 'native-base'

export function Home() {
    return (
        <VStack flex={1}>
            <HomeHeader />

            <HStack>
                <Group name='Costas' isActive={true} />
                <Group name='Ombro' isActive={false} />
            </HStack>

        </VStack>
    )
}




