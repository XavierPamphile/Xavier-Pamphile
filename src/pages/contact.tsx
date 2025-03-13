import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './contact.module.css';
import Link from '@docusaurus/Link';

export default function Contact(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Contact" description="Contact Xavier Pamphile for professional inquiries">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Contact</h1>
          <p className="hero__subtitle">Get in touch with me</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className={styles.contactCard}>
              <h2>Let's Connect</h2>
              <p>
                Feel free to reach out for professional opportunities, collaborations, or just to
                say hello. I'll get back to you as soon as possible.
              </p>

              <div className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email address" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button className="button button--primary button--block">Send Message</button>
              </div>

              <div className={styles.contactAlternatives}>
                <h3>Other Ways to Connect</h3>
                <ul className={styles.socialLinks}>
                  <li>
                    <Link
                      to="https://linkedin.com/in/xavier-pamphile"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/XavierPamphile" className={styles.socialLink}>
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
