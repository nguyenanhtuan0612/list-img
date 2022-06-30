import React from 'react';
import { Text } from 'react-native';
import { Props } from '../navigate/props';

export default function Profile({ route }: Props) {
    return <Text>This is {route.name}'s profile</Text>;
}
