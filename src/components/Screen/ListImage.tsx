import React from 'react';
import { Text, View } from 'react-native';
import { Props } from '../../navigate/props';

export default function ListImage({ route }: Props) {
    return (
        <View>
            <Text>{route.name}</Text>
        </View>
    );
}
