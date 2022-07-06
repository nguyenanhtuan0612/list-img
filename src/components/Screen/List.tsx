import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { baseUrl } from '../../constants/url';
import { services, toast } from '../../helpers';
import { Props } from '../../navigate/props';

interface IItem {
    dicid: string;
    dicname: string;
    registrationetime: string;
    updatetime: string;
    savedir: string;
    userid: string;
    status: string;
    imgnum: number;
}

export default function List({ navigation }: Props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            await getListDic();
            setLoading(false);
        }

        fetch();
    }, []);

    async function getListDic() {
        try {
            const res = await services.get(`${baseUrl}/dictionary`);
            setData(res.data);
        } catch (error) {
            return toast.errToast(error);
        }
    }

    function getTime(time: string) {
        const arr = time.split('-');
        const day = arr[2].split('T');
        return day[0] + '-' + arr[1] + '-' + arr[0];
    }

    const itemOnPress = (item: IItem) => {
        return navigation.navigate('ListImage', {
            dicid: item.dicid,
            dicName: item.dicname,
        });
    };

    const renderItem: ListRenderItem<IItem> = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => itemOnPress(item)}
            >
                <View style={styles.nameView}>
                    <Ionicons name="folder" size={24} style={styles.icon} />
                    <View>
                        <Text style={styles.title}>{item.dicname}</Text>
                        <Text style={styles.time}>
                            {getTime(item.registrationetime)}
                        </Text>
                    </View>
                </View>
                <Text>{item.userid}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <Text>Tên thư mục</Text>
                <Text>Tác giả</Text>
            </View>
            {loading ? (
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color={'#4E0189'} />
                </View>
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dicid}
                ></FlatList>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    loadingView: {
        marginTop: 30,
        alignItems: 'center',
    },
    list: { marginTop: 10 },
    mainView: {
        padding: 16,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    icon: {
        marginHorizontal: 10,
    },
    title: { fontSize: 16, fontWeight: '400' },
    time: {
        fontSize: 12,
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
