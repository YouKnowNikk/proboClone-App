// BoxySection.tsx
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import BoxyItem from './BoxyItem';

interface BoxyDataItem {
    title: string;
    icon: string; // Assuming icon is a URL string
}

const boxyData: BoxyDataItem[] = [
    { title: 'Item 1', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Item+1' },
    { title: 'Item 2', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Item+2' },
    { title: 'Item 3', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Item+3' },
    { title: 'Item 4', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Item+4' },
    { title: 'Item 5', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Item+5' },
    // Add more items as needed
];

const BoxySection: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {boxyData.map((item, index) => (
                    <BoxyItem
                        key={index}
                        title={item.title}
                        icon={{ uri: item.icon }}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop:20,
        marginBottom:10
    },
});

export default BoxySection;
