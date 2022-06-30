import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { services, toast } from '../helpers';
import { Props } from '../navigate/props';

export default function Login({ navigation }: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onPressLogin() {
        try {
            const res = await services.login(username, password);
            if (res.data) {
                navigation.navigate('Home');
            }
        } catch (error: any) {
            if (error.response.status && error.response.status == 401) {
                return toast.errToast({
                    name: 'Đăng nhập không thành công!',
                    message: 'Tên đăng nhập hoặc mật khẩu không chính xác.',
                });
            }
            return toast.errToast(error);
        }
    }

    return (
        <View style={styles.login}>
            <Text style={styles.hi}>Hi, Wecome Back! 👋</Text>
            <Text style={styles.again}>Hello again, you've been missed!</Text>
            <View style={styles.usernameView}>
                <Text style={styles.text}>Tên đăng nhập</Text>
                <TextInput
                    onChangeText={(val) => setUsername(val)}
                    value={username}
                    style={styles.input}
                    placeholder="Infiniteaa!"
                />
            </View>
            <View style={styles.passwordView}>
                <Text style={styles.text}>Mật khẩu</Text>
                <TextInput
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                    style={styles.input}
                    placeholder="*******"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
                <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    hi: {
        fontWeight: '600',
        fontSize: 25,
        marginTop: 92,
        marginLeft: 29,
    },
    again: {
        fontWeight: '600',
        fontSize: 14,
        marginLeft: 29,
        color: '#999EA1',
    },
    login: {
        flex: 1,
    },
    usernameView: {
        marginTop: 52,
        marginHorizontal: 27,
    },
    passwordView: {
        marginTop: 12,
        marginHorizontal: 27,
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        color: '#4E0189',
    },
    input: {
        marginTop: 8,
        fontWeight: '600',
        fontSize: 14,
        color: '#4E0189',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 10,
    },
    loginBtn: {
        marginHorizontal: 27,
        marginTop: 64,
        backgroundColor: '#4E0189',
        paddingVertical: 11,
        alignItems: 'center',
        borderRadius: 10,
    },
    loginText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
    },
});
