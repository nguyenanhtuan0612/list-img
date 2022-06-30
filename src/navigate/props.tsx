import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Profile: { name: string };
    Login: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
