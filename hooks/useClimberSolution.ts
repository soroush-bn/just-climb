import { useState } from 'react';

export function useClimberSolution() {
  // Example state: tracking which AI feature is being highlighted
  const [selectedFeature, setSelectedFeature] = useState('Beta Analysis');

  const features = [
    {
      title: 'AI Beta Analysis',
      description: 'Upload a photo of any wall. Our VQ-VAE model identifies holds and suggests the optimal path based on your height and wingspan.',
      icon: '🧗‍♂️',
      bgImage: '/climbersbg1.png'
    },
    {
      title: 'Performance Tracking',
      description: 'Log your sessions and see your progress over time with advanced metrics and heatmaps of your climbing style.',
      icon: '📊',
      bgImage: '/climbersbg2.jpg'
    },
    {
      title: 'Community Beta',
      description: 'Share your sends and see how others tackled the same project. Learn from the community.',
      icon: '🤝',
      bgImage: '/climbersbg3.jpg'
    }
  ];

  return {
    features,
    selectedFeature,
    setSelectedFeature
  };
}