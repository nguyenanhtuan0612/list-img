import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Main: undefined;
    ListImage: {
        dicName: string;
        dicid: string;
    };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'ListImage'>;
