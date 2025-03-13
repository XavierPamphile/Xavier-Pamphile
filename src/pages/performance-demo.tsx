import React from 'react';
import Layout from '@theme/Layout';
import OptimizedImage from '../components/OptimizedImage';
import { lazyLoad, LoadingComponent } from '../utils/lazyLoad';
import styles from './performance-demo.module.css';

// Lazy-loaded component example
const LazyComponent = lazyLoad(() => import('../components/OptimizedImage'), <LoadingComponent />);

export default function PerformanceDemo(): JSX.Element {
  return (
    <Layout title="Performance Demo" description="Demonstration of performance optimizations">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Performance Optimization Demo</h1>

            <section className={styles.section}>
              <h2>Image Optimization</h2>
              <p>
                This page demonstrates the use of optimized images for better performance. The
                images below are:
              </p>
              <ul>
                <li>Responsive - adapts to the viewport size</li>
                <li>Lazy-loaded - only loads when scrolled into view</li>
                <li>Optimized - with proper alt text and dimensions</li>
              </ul>

              <div className={styles.imageDemo}>
                <p>Example of an optimized image:</p>
                <OptimizedImage src="/img/docusaurus.png" alt="Docusaurus logo" width={300} />

                <p>To use optimized images in your components:</p>
                <pre className={styles.codeBlock}>
                  {`import OptimizedImage from '@site/src/components/OptimizedImage';

// Then in your JSX:
<OptimizedImage 
  src="/img/your-image.jpg" 
  alt="Description" 
  width={300} 
  height={200} 
/>`}
                </pre>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Code Splitting</h2>
              <p>
                This page also demonstrates code splitting with React's lazy loading. The component
                below is loaded only when needed:
              </p>

              <div className={styles.codeSplittingDemo}>
                <pre className={styles.codeBlock}>
                  {`import { lazyLoad, LoadingComponent } from '../utils/lazyLoad';

// Lazy-loaded component
const LazyComponent = lazyLoad(
  () => import('../components/MyComponent'),
  <LoadingComponent />
);

// Then in your JSX:
<LazyComponent prop1="value" />`}
                </pre>

                <div className={styles.lazyLoadDemo}>
                  <h3>Lazy Loaded Component Example</h3>
                  <p>This component was loaded lazily:</p>
                  <LazyComponent
                    src="/img/docusaurus.png"
                    alt="This is a lazy-loaded component"
                    width={200}
                  />
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Other Performance Optimizations</h2>
              <p>Your Docusaurus site also includes these performance optimizations:</p>
              <ul>
                <li>
                  <strong>Automatic code splitting</strong> - Docusaurus automatically splits your
                  code by routes
                </li>
                <li>
                  <strong>Optimized production build</strong> - Minification, tree-shaking, and dead
                  code elimination
                </li>
                <li>
                  <strong>Prefetching</strong> - Links are prefetched when they enter the viewport
                </li>
                <li>
                  <strong>Progressive Web App (PWA) ready</strong> - Can be enhanced with the PWA
                  plugin
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
