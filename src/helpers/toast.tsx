import Toast from 'react-native-toast-message';

export function errToast(error: any) {
    Toast.show({
        type: 'error',
        text1: error.name || 'Lỗi không xác định!',
        text2: error.message || 'Có gì đó sai sai.',
    });
}
