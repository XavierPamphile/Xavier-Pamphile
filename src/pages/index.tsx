import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageSocial from '../components/HomepageSocial';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/experience">
            View My Experience
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.profileSection}>
              <h2>About Me</h2>
              <p>
                Hello! I'm Xavier Pamphile, a passionate professional with expertise in software
                development and technology. I specialize in creating elegant, efficient solutions to
                complex problems.
              </p>
              <p>
                With a background in [Your Background], I bring a unique perspective to every
                project I work on. I'm dedicated to continuous learning and staying at the forefront
                of industry trends.
              </p>
              <div className={styles.ctaButtons}>
                <Link className="button button--primary" to="/contact">
                  Contact Me
                </Link>
                <Link
                  className="button button--outline button--primary"
                  to="/files/resume.pdf"
                  target="_blank"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.skillsSection}>
              <h2>Skills & Expertise</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h3>Programming</h3>
                  <ul className={styles.skillsList}>
                    <li>JavaScript/TypeScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Tools & Frameworks</h3>
                  <ul className={styles.skillsList}>
                    <li>Docusaurus</li>
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>GitHub Actions</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Professional</h3>
                  <ul className={styles.skillsList}>
                    <li>Project Management</li>
                    <li>Team Collaboration</li>
                    <li>Technical Writing</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Professional portfolio of Xavier Pamphile - Software Developer and Technology Enthusiast"
    >
      <HomepageHeader />
      <main>
        <HomepageContent />
        <HomepageSocial />
      </main>
    </Layout>
  );
}
