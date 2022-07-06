import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { baseUrl } from '../../constants/url';
import { services, toast } from '../../helpers';
import { Props } from '../../navigate/props';

interface IItem {
    imgid: string;
    imgname: string;
    memo: any;
    dicid: string;
    registrationetime: string;
    updatetime: string;
    url: string;
    status: string;
    likenum: number;
}
const exampleImgUrl =
    'https://yt3.ggpht.com/g3j3iOUOPhNxBCNAArBqiYGzHzCBIzr_Al8mdvtBJeZMGFDblnU5rlVUt6GY01AUwm7Cp70J=s900-c-k-c0x00ffffff-no-rj';

export default function ListImage({ route, navigation }: Props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            await getListImg();
            setLoading(false);
        }

        fetch();
    }, []);

    async function getListImg() {
        try {
            const res = await services.get(
                `${baseUrl}/dictionary/${route.params.dicid}/img`,
            );
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
        return navigation.navigate('ViewImage', {
            imgName: item.imgname,
            uri: exampleImgUrl, //uri: item.url,
        });
    };

    const renderItem: ListRenderItem<IItem> = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => itemOnPress(item)}
            >
                <View style={styles.nameView}>
                    <Image
                        source={{
                            uri: exampleImgUrl, // uri: item.url,
                        }}
                        style={styles.miniImg}
                    />
                    <View>
                        <Text style={styles.title}>{item.imgname}</Text>
                    </View>
                </View>
                <Text style={styles.time}>
                    {getTime(item.registrationetime)}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <Text>Tên file</Text>
                <Text>Ngày tạo</Text>
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
                    keyExtractor={(item) => item.imgid}
                ></FlatList>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    miniImg: { width: 50, height: 50, marginRight: 8 },
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
    title: { fontSize: 16, fontWeight: '400' },
    time: {
        fontSize: 12,
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
