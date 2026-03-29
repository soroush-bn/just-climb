import { useState } from 'react';

export function useGymSolution() {
  const features = [
    {
      title: 'Auto-Grading AI',
      description: 'Our computer vision model analyzes new sets and suggests a grade based on movement complexity, hold types, and wall angle.',
      icon: '🏷️',
      bgImage: '/gymsbg1.png'
    },
    {
      title: 'Traffic Analytics',
      description: 'Identify which routes are "crowd favorites" and which are being ignored. Optimize your setting schedule based on real data.',
      icon: '📈',
      bgImage: '/gymsbg2.png'
    },
    {
      title: 'Digital Logbooks',
      description: 'Replace paper tags with interactive digital beta. Let climbers scan a QR code to see the intended sequence for any route.',
      icon: '📱',
      bgImage: '/gymsbg3.jpg'
    }
  ];

  return { features };
}