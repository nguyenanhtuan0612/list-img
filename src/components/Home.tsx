import React from 'react';
import { Button } from 'react-native';
import { Props } from '../navigate/props';

export default function Home({ navigation }: Props) {
    return (
        <Button
            title={`Go to Jane's profile`}
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />
    );
}
