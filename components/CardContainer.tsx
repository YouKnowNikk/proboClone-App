// MainScreen.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Card from './Card';

const cardData = [
    {
        traders: 750,
        title: 'India to win the 2024 Women’s Asian Championship?',
        description: 'The series will start from 18 July Read more',
        icon: { uri: 'https://dummyimage.com/100x100/ccc/000.png&text=1' },
        yesPrice: 7.5,
        noPrice: 2.5,
    },
    {
        traders: 60126,
        title: 'NEET UG 2024 to be reconducted for all the students?',
        description: 'The exam was re-conducted for 1563 candidates on 23 June, 2024. Read more',
        icon: { uri: 'https://dummyimage.com/100x100/ccc/000.png&text=2' },
        yesPrice: 2.5,
        noPrice: 7.5,
    },
    {
        traders: 9500,
        title: 'Donald Trump to win the 2024 U.S. Presidential elections?',
        description: 'Donald Trump, a member of the Republican Party, is running for re-election to a second, nonconsecutive term Read more',
        icon: { uri: 'https://dummyimage.com/100x100/ccc/000.png&text=3' },
        yesPrice: 7.5,
        noPrice: 2.5,
    },
];

function CardContainer(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        traders={data.traders}
                        title={data.title}
                        description={data.description}
                        icon={data.icon}
                        yesPrice={data.yesPrice}
                        noPrice={data.noPrice}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcfc',
    },
    scrollContainer: {
        padding: 10,
    },
});

export default CardContainer;
