
import React from 'react';
import LoadingAnimation from './LoadingAnimation';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col justify-center items-center">
      <LoadingAnimation />
      <p className="mt-4 font-playfair text-black animate-pulse">Lädt...</p>
    </div>
  );
};

export default LoadingScreen;
