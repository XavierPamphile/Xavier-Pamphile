import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageSocial from '@site/src/components/HomepageSocial';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Xavier Pamphile</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>Développeur Logiciel & Passionné de Technologie</Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/contact">
            <Translate>Contactez-moi</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`À propos`}
      description="Portfolio personnel de Xavier Pamphile - Développeur Logiciel"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--6', styles.featureItem)}>
                <div className="text--center">
                  <h3>
                    <Translate>À propos de moi</Translate>
                  </h3>
                </div>
                <p>
                  <Translate>
                    Je suis un développeur logiciel passionné avec une expertise en développement
                    web et mobile. J'aime créer des applications performantes et conviviales qui
                    résolvent des problèmes réels. Avec une solide formation en informatique et
                    plusieurs années d'expérience dans l'industrie, je m'efforce de rester à jour
                    avec les dernières technologies et meilleures pratiques.
                  </Translate>
                </p>
              </div>
              <div className={clsx('col col--6', styles.featureItem)}>
                <div className="text--center">
                  <h3>
                    <Translate>Compétences</Translate>
                  </h3>
                </div>
                <p>
                  <Translate>
                    Mes compétences techniques incluent JavaScript/TypeScript, React, Node.js, et
                    diverses technologies de base de données. Je suis également familier avec les
                    méthodologies Agile et les pratiques DevOps. En plus de mes compétences
                    techniques, je valorise la communication claire, la résolution de problèmes et
                    le travail d'équipe.
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </section>
        <HomepageSocial />
      </main>
    </Layout>
  );
}
