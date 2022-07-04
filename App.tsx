import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Login from './src/components/Auth/Login';
import Toast from 'react-native-toast-message';
import Main from './src/components/Screen/Main';
import ListImage from './src/components/Screen/ListImage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <StatusBar barStyle="dark-content" backgroundColor="white" />
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
                        name="Main"
                        component={Main}
                        options={{
                            headerShown: false,
                            animation: 'slide_from_right',
                        }}
                    />
                    <Stack.Screen
                        name="ListImage"
                        component={ListImage}
                        options={({ route }) => {
                            const params: any = route.params;
                            return {
                                animation: 'slide_from_right',
                                title: params.dicName,
                            };
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast position="bottom" bottomOffset={20} />
        </>
    );
}
