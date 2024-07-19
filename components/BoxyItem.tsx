// BoxyItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface BoxyItemProps {
    title: string;
    icon: { uri: string };
}

const BoxyItem: React.FC<BoxyItemProps> = ({ title, icon }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
        elevation:3,
        marginBottom:10,
    },
    image: {
        width: 25,
        height: 25,
        borderRadius:30,
        marginBottom:5
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default BoxyItem;
