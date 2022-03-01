import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import albumData from '../json/albums';

const AlbumList = () => {
    return(
        <ScrollView style={styles.scrollView}>
            {
                albumData.map((item, index) =>{
                    return(
                        <View style={styles.albumWrapper} key={index}>
                            <View style={styles.albumIntro}>
                                <Image style={styles.artistAvatar} source={{uri: item.thumbnail_image}} resizeMode="cover" />
                                <View>
                                    <Text style={styles.artist}>{item.artist}</Text>
                                    {
                                        item.title.length > 18 ? <Text style={styles.albumTitle}>{item.title.slice(0,19)}...</Text> : <Text style={styles.albumTitle}>{item.title}</Text>
                                    }
                                </View>
                                <TouchableOpacity style={styles.favorite}>
                                    <Icon name="favorite-outline" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.image} source={{uri: item.image}} />
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: '100%',
    },
    albumWrapper: {
        color: "#484848",
        width: 320,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 15,
    },
    albumIntro: {
        flexDirection: "row",
        marginBottom: 15,
    },
    artistAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    artist: {
        fontSize: 24,
        color: "#fff",
    },
    albumTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    favorite: {
        marginLeft: 'auto',
    },
    image: {
        width: 320,
        height: 320,
    },
});

export default AlbumList;