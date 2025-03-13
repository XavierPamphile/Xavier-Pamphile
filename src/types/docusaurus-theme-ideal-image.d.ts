declare module '@theme/IdealImage' {
  export interface SrcImage {
    width: number;
    height: number;
    preSrc: string;
    src: string;
    images: {
      path: string;
      width: number;
      height: number;
    }[];
  }

  export interface IdealImageProps {
    img: SrcImage | string;
    alt?: string;
    className?: string;
    loading?: 'lazy' | 'eager';
    threshold?: number;
    onLoad?: () => void;
    style?: React.CSSProperties;
  }

  const IdealImage: React.ComponentType<IdealImageProps>;
  export default IdealImage;
}
