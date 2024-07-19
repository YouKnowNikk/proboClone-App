import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface TrendingItemProps {
    title: string;
    icon: { uri: string };
    live: boolean;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ title, icon, live }) => {
    return (
       <>
        
        <View style={styles.itemContainer}>
        {live && <View style={styles.liveBadge}><Text style={styles.liveText}>LIVE</Text></View>}
            <Image source={icon} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
               
            </View>
        </View>
       </>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginRight: 15,
        backgroundColor: '#fefefe',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 3,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    liveBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 15,
    },
    liveText: {
        color: 'white',
        fontSize: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TrendingItem;
