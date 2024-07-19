import React from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';
let {width} = Dimensions.get('window'); 
const ImageGallery = () => {
  
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.imageScrollContainer}
    >
      <Image 
        source={{ uri: 'https://media.istockphoto.com/id/117148027/photo/giant-slalom-race.jpg?s=1024x1024&w=is&k=20&c=lO1s-fl5HlxlYTY9K6ssCGUdzW7U-l_PUnnzjXcP88g=' }} 
        style={styles.image} 
      />
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      />
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      />
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      />
      {/* Add more Image components as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageScrollContainer: {
    marginVertical:5
  },
  image: {
    width: width-40,
    height: 150,
    resizeMode: 'cover',
    marginHorizontal:4
  },
});

export default ImageGallery;
