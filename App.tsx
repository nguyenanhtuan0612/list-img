import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Profile from './src/components/Profile';
import Toast from 'react-native-toast-message';
const Stack = createNativeStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default function App() {
    return (
        <>
            <NavigationContainer>
                <StatusBar barStyle="light-content" />
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                            animation: 'slide_from_right',
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            animation: 'slide_from_right',
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            animation: 'slide_from_right',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast position="bottom" bottomOffset={20} />
        </>
    );
}
