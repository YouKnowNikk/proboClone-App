declare module 'react-native-swipe-button' {
    import { Component } from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    interface SwipeButtonProps {
      title?: string;
      onSwipeSuccess?: () => void;
      thumbIconBackgroundColor?: string;
      thumbIconBorderColor?: string;
      railBackgroundColor?: string;
      railBorderColor?: string;
      railFillBackgroundColor?: string;
      railFillBorderColor?: string;
      thumbIconComponent?: () => React.ReactNode;
      titleColor?: string;
      titleFontSize?: number;
      titleStyles?: TextStyle;
      railStyles?: ViewStyle;
      railFillStyles?: ViewStyle;
      thumbIconStyles?: ViewStyle;
    }
  
    export default class SwipeButton extends Component<SwipeButtonProps> {}
  }
  