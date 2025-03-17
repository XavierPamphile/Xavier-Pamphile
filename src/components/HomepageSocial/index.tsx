import React from 'react';
import SocialLinks from '../SocialLinks';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function HomepageSocial(): JSX.Element {
  return (
    <section className={styles.socialSection}>
      <div className="container">
        <div className={styles.socialContent}>
          <h2 className={styles.socialTitle}>
            {translate({
              id: 'homepage.social.title',
              message: 'Connect With Me',
              description: 'Title for the social links section on the homepage',
            })}
          </h2>
          <p className={styles.socialDescription}>
            {translate({
              id: 'homepage.social.description',
              message:
                'Follow me on social media to stay updated with my latest projects and articles.',
              description: 'Description for the social links section on the homepage',
            })}
          </p>
          <div className={styles.socialLinksContainer}>
            <SocialLinks showLabels={true} className={styles.socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
}
