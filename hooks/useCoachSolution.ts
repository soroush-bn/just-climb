import { useState } from 'react';

export function useCoachSolution() {
  const features = [
    {
      title: 'Movement Analysis',
      description: 'Overlay AI-generated "Ghost" paths on student videos to compare their movement against professional benchmarks.',
      icon: '👤',
      bgImage: '/instructorsbg1.jpg'
    },
    {
      title: 'Training Plans',
      description: 'Build data-driven periodization cycles. Track finger strength, core stability, and endurance metrics in one dashboard.',
      icon: '📋',
      bgImage: '/instructorsbg2.jpg'
    },
    {
      title: 'Remote Coaching',
      description: 'A dedicated portal for video feedback. Draw on the screen, leave voice notes, and set goals for your students globally.',
      icon: '🌍',
      bgImage: '/instructorsbg3.jpg'
    }
  ];

  return { features };
}