
// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';

// interface CardProps {
//     traders: number;
//     title: string;
//     description: string;
//     icon: { uri: string };
//     yesPrice: number;
//     noPrice: number;
// }

// const { height } = Dimensions.get('window');

// const Card: React.FC<CardProps> = ({ traders, title, description, icon, yesPrice, noPrice }) => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [animation] = useState(new Animated.Value(height));

//     const openModal = () => {
//         setModalVisible(true);
//         Animated.timing(animation, {
//             toValue: height * 0.4, // Cover 60% of the screen
//             duration: 300,
//             useNativeDriver: false,
//         }).start();
//     };

//     const closeModal = () => {
//         Animated.timing(animation, {
//             toValue: height,
//             duration: 300,
//             useNativeDriver: false,
//         }).start(() => setModalVisible(false));
//     };

//     return (
//         <View style={styles.cardContainer}>
//             <Text style={styles.tradersText}>{`${traders} traders`}</Text>
//             <View style={styles.content}>
//                 <View style={styles.textContainer}>
//                     <Text style={styles.title}>{title}</Text>
//                     <Text style={styles.description}>{description}</Text>
//                 </View>
//                 <Image source={icon} style={styles.icon} />
//             </View>
//             <View style={styles.buttonsContainer}>
//                 <TouchableOpacity style={styles.yesButton} onPress={openModal}>
//                     <Text style={styles.buttonText}>{`Yes ₹ ${yesPrice}`}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.noButton} onPress={openModal}>
//                     <Text style={styles.buttonText}>{`No ₹ ${noPrice}`}</Text>
//                 </TouchableOpacity>
//             </View>

//             <Modal
//                 transparent={true}
//                 visible={modalVisible}
//                 animationType="slide"
//                 onRequestClose={closeModal}
//             >
//                 <TouchableOpacity style={styles.modalOverlay} onPress={closeModal}>
//                     <Animated.View style={[styles.modalContainer, { top: animation }]}>
//                         <Text style={styles.modalTitle}>Place your bet</Text>
//                         <Text style={styles.modalContent}>Confirm your choice:</Text>
//                         <View style={styles.modalButtons}>
//                             <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
//                                 <Text style={styles.buttonText}>Confirm</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
//                                 <Text style={styles.buttonText}>Cancel</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </Animated.View>
//                 </TouchableOpacity>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     cardContainer: {
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         padding: 15,
//         marginVertical: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         elevation: 3,
//     },
//     tradersText: {
//         fontSize: 14,
//         color: '#999',
//         marginBottom: 10,
//     },
//     content: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         width: 40,
//         height: 40,
//         borderRadius: 5,
//         marginRight: 10,
//     },
//     textContainer: {
//         flex: 1,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     description: {
//         fontSize: 14,
//         color: '#555',
//         marginTop: 5,
//     },
//     buttonsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 10,
//     },
//     yesButton: {
//         backgroundColor: '#e6f4f1',
//         padding: 10,
//         borderRadius: 5,
//         flex: 1,
//         marginRight: 5,
//         alignItems: 'center',
//     },
//     noButton: {
//         backgroundColor: '#fdeeed',
//         padding: 10,
//         borderRadius: 5,
//         flex: 1,
//         marginLeft: 5,
//         alignItems: 'center',
//     },
//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-end',
//     },
//     modalContainer: {
//         backgroundColor: 'white',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         padding: 20,
//         height: '60%',
//     },
//     modalTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     modalContent: {
//         fontSize: 16,
//         marginBottom: 20,
//     },
//     modalButtons: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     modalButton: {
//         backgroundColor: '#007BFF',
//         padding: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//         flex: 1,
//         marginHorizontal: 5,
//     },
// });

// export default Card;
