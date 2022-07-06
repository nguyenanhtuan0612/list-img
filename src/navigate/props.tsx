import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined;
    Main: undefined;
    ListImage: {
        dicName: string;
        dicid: string;
    };
    ViewImage: {
        imgName: string;
        uri: string;
    };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'ListImage'>;
export type PropsViewImage = NativeStackScreenProps<
    RootStackParamList,
    'ViewImage'
>;
