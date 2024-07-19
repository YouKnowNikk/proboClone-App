import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BidModel from './BidModel';

interface CardProps {
    traders: number;
    title: string;
    description: string;
    icon: { uri: string };
    yesPrice: number;
    noPrice: number;
}

const Card: React.FC<CardProps> = ({ traders, title, description, icon, yesPrice, noPrice }) => {
    const [showModel, setShowModel] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState<{ yesPrice: number, noPrice: number, selectedButton: 'yes' | 'no' | null, title: string, icon: { uri: string } }>({ yesPrice: 0, noPrice: 0, selectedButton: null, title: '', icon: { uri: '' } });

    const handlePress = (button: 'yes' | 'no') => {
        setSelectedPrice({
            yesPrice:yesPrice,
            noPrice: noPrice,
            selectedButton: button,
            title: title,
            icon: icon
        });
        setShowModel(true);
    };

    const handleClose = () => {
        setShowModel(false);
        setSelectedPrice({ yesPrice: 0, noPrice: 0, selectedButton: null, title: '', icon: { uri: '' } });
    };

    return (
        <>
            <View style={styles.cardContainer}>
                <Text style={styles.tradersText}>{`${traders} traders`}</Text>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <Image source={icon} style={styles.icon} />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={[styles.yesButton, selectedPrice.selectedButton === 'yes' && styles.selectedYesButton]}
                        onPress={() => handlePress('yes')}
                        disabled={showModel}
                    >
                        <Text style={styles.yesbuttonText}>{`Yes ₹ ${yesPrice}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.noButton, selectedPrice.selectedButton === 'no' && styles.selectedNoButton]}
                        onPress={() => handlePress('no')}
                        disabled={showModel}
                    >
                        <Text style={styles.nobuttonText}>{`No ₹ ${noPrice}`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {showModel && <BidModel yesPrice={selectedPrice.yesPrice} noPrice={selectedPrice.noPrice} selectedButton={selectedPrice.selectedButton} onClose={handleClose} title={selectedPrice.title} icon={selectedPrice.icon} />}
        </>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    tradersText: {
        fontSize: 14,
        color: '#999',
        marginBottom: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    yesButton: {
        backgroundColor: '#dfeafe',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    noButton: {
        backgroundColor: '#ffdae1',
        
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    selectedYesButton: {
        backgroundColor: 'blue',
    },
    selectedNoButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    yesbuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'blue'
    },
    nobuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'red'
    },
});

export default Card;
