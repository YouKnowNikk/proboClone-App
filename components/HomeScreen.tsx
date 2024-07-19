import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from './HeaderComponent'
import ImageGallery from './ImageGallery'
import BoxySection from './BoxySection'
import TrendingSection from './TrendingSection'
import CardContainer from './CardContainer'
const themeColor = '#f5f5f5';
const HomeScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <HeaderComponent />
        <View style={styles.innerContainer}>
          <ImageGallery />
          <BoxySection />
          <TrendingSection />
          <CardContainer/>
        </View>
      </ScrollView>
     
    </SafeAreaView>
   
  )
}

export default HomeScreen
const styles = StyleSheet.create({
   
    scrollContainer: {
      backgroundColor:themeColor
    },
    innerContainer: {
      backgroundColor: themeColor,
  
    },
  });