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
          <p className="hero__subtitle">Prenez contact avec moi</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className={styles.contactCard}>
              <h2>Restons en contact</h2>
              <p>
                N'hésitez pas à me contacter pour des opportunités professionnelles, des
                collaborations, ou simplement pour échanger. Je vous répondrai dans les plus brefs
                délais.
              </p>

              <div className={styles.contactForm}>
                <div className={styles.googleFormContainer}>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdcC3GZViJHgPTSWWYrEwn2N77KOEu1n5a3nZWKJdO_T_kHBA/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Formulaire de Contact"
                  >
                    Chargement...
                  </iframe>
                </div>
              </div>

              <div className={styles.contactAlternatives}>
                <h3>Autres moyens de me contacter</h3>
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
