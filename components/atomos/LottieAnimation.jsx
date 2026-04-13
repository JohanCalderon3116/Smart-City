import LottieView from 'lottie-react-native';
import React from 'react';

export const Lottieanimation = ({ alto, ancho, animacion }) => {
  return (
    <LottieView
      source={animacion}
      autoPlay
      loop
      style={{
        width: ancho,
        height: alto,
      }}
    />
  );
};