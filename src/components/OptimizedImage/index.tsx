import React from 'react';
import styles from './styles.module.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
}: OptimizedImageProps): JSX.Element {
  return (
    <div className={`${styles.optimizedImageContainer} ${className || ''}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={styles.optimizedImage}
      />
    </div>
  );
}
