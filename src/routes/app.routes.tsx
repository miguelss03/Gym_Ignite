import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Exercise } from '@screens/application/Exercise';
import { History } from '@screens/application/History';
import { Home } from '@screens/application/Home';
import { Profile } from '@screens/application/Profile';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { useTheme } from 'native-base';

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

    const { sizes } = useTheme();
    const iconSize = sizes[6];

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />

            <Screen
                name="exercise"
                component={Exercise}
            />

        </Navigator>
    );
}
