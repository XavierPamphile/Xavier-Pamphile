import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './experience.module.css';

export default function Experience(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Professional Experience"
      description="Professional experience and projects of Xavier Pamphile"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Professional Experience</h1>
          <p className="hero__subtitle">My career journey and projects</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {/* Experience timeline will go here */}
            <div className={styles.experienceTimeline}>
              <div className={styles.experienceItem}>
                <h2>Senior Developer</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Company Name</span>
                  <span className={styles.period}>2020 - Present</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
                  ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                </p>
                <ul>
                  <li>Accomplishment 1</li>
                  <li>Accomplishment 2</li>
                  <li>Accomplishment 3</li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Developer</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Previous Company</span>
                  <span className={styles.period}>2018 - 2020</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel
                  ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                </p>
                <ul>
                  <li>Accomplishment 1</li>
                  <li>Accomplishment 2</li>
                  <li>Accomplishment 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
