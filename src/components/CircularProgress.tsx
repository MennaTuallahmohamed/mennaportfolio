
import { useEffect, useRef } from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  label: string;
  animate?: boolean;
}

const CircularProgress = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  circleColor = '#e6e6e6',
  progressColor = '#8b5cf6',
  label,
  animate = true
}: CircularProgressProps) => {
  const progressRef = useRef<SVGCircleElement>(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (percentage * circumference) / 100;
  
  useEffect(() => {
    if (progressRef.current && animate) {
      progressRef.current.style.setProperty('--progress', `${dash}`);
      
      // Apply animation only after element is visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              progressRef.current?.classList.add('animate-progress-animation');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (progressRef.current) {
        observer.observe(progressRef.current);
      }
      
      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current);
        }
      };
    }
  }, [dash, animate]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={circleColor}
            strokeWidth={strokeWidth}
          />
          
          {/* Progress Circle */}
          <circle
            ref={progressRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={progressColor}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeDashoffset="0"
            strokeLinecap="round"
            style={{ 
              transformOrigin: '50% 50%',
              transform: 'rotate(-90deg)',
              strokeDasharray: animate ? '0 100' : `${dash} ${circumference - dash}`,
              '--progress': dash 
            } as React.CSSProperties}
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-brand-primary">{percentage}%</span>
        </div>
      </div>
      <span className="mt-3 text-center font-medium text-gray-800">{label}</span>
    </div>
  );
};

export default CircularProgress;
