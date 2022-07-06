import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Login from './src/components/Auth/Login';
import Toast from 'react-native-toast-message';
import Main from './src/components/Screen/Main';
import ListImage from './src/components/Screen/ListImage';
import { RootStackParamList } from './src/navigate/props';
import ViewImage from './src/components/Screen/ViewImage';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
                        options={({ route }) => ({
                            animation: 'slide_from_right',
                            title: route.params.dicName,
                        })}
                    />
                    <Stack.Screen
                        name="ViewImage"
                        component={ViewImage}
                        options={({ route }) => ({
                            animation: 'slide_from_right',
                            title: route.params.imgName,
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast position="bottom" bottomOffset={20} />
        </>
    );
}
