// TrendingSection.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import TrendingItem from './TrendingItem';

interface TrendingDataItem {
    title: string;
    icon: string; // Assuming icon is a URL string
    live: boolean;
}

const trendingData: TrendingDataItem[] = [
    { title: 'Bitcoin', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Bitcoin', live: true },
    { title: 'Youtube', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Youtube', live: false },
    { title: 'SEAvLA', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=SEAvLA', live: false },
    { title: 'Expiring Soon', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Expiring+Soon', live: true },
    { title: 'Budget FY 24-25', icon: 'https://dummyimage.com/100x100/ccc/000.png&text=Budget+FY+24-25', live: false },
    // Add more items as needed
];

const TrendingSection: React.FC = () => {
    // const firstRowData = trendingData.slice(0, Math.ceil(trendingData.length / 2));
    // const secondRowData = trendingData.slice(Math.ceil(trendingData.length / 2));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Trending Now</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.row}>
                        {trendingData.map((item, index) => (
                            <TrendingItem
                                key={index}
                                title={item.title}
                                icon={{ uri: item.icon }}
                                live={item.live}
                            />
                        ))}
                    </View>
                    <View style={styles.row}>
                        {trendingData.map((item, index) => (
                            <TrendingItem
                                key={index}
                                title={item.title}
                                icon={{ uri: item.icon }}
                                live={item.live}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'#2f2f2f',
        paddingHorizontal:10
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
});

export default TrendingSection;
