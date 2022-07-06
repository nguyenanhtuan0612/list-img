import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, Image, View } from 'react-native';
import { PropsViewImage } from '../../navigate/props';

export default function ViewImage({ route }: PropsViewImage) {
    const [loading, setLoading] = useState(true);
    const wWidth = Dimensions.get('window').width;

    return (
        <View
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
            <ActivityIndicator
                size="large"
                color={'#4E0189'}
                style={{ display: loading ? 'flex' : 'none' }}
            />
            <Image
                onLoadStart={() => {
                    setLoading(true);
                }}
                onLoadEnd={() => setLoading(false)}
                source={{ uri: route.params.uri, method: 'GET' }}
                style={{
                    height: wWidth,
                    aspectRatio: 1,
                    display: loading ? 'none' : 'flex',
                }}
            />
        </View>
    );
}
