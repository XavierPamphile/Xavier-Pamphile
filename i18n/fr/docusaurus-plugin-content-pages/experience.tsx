import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';

import styles from './experience.module.css';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Développeur Full Stack Senior',
    company: 'Entreprise Innovante',
    period: 'Janvier 2022 - Présent',
    description: [
      "Développement et maintenance d'applications web à grande échelle utilisant React, Node.js et MongoDB",
      "Implémentation de nouvelles fonctionnalités et amélioration de l'expérience utilisateur",
      'Collaboration avec les équipes de produit et de design pour définir les spécifications techniques',
      'Mentorat des développeurs juniors et revue de code',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
  },
  {
    title: 'Développeur Frontend',
    company: 'Startup Technologique',
    period: 'Mars 2019 - Décembre 2021',
    description: [
      "Développement d'interfaces utilisateur réactives et accessibles avec React et Redux",
      'Optimisation des performances frontend et implémentation de tests automatisés',
      "Participation à la refonte complète de l'application principale de l'entreprise",
      'Collaboration étroite avec les designers UX/UI pour implémenter des maquettes',
    ],
    technologies: ['React', 'Redux', 'SASS', 'Jest', 'Webpack'],
  },
  {
    title: 'Développeur Web Junior',
    company: 'Agence Digitale',
    period: 'Juin 2017 - Février 2019',
    description: [
      'Développement de sites web responsifs pour divers clients',
      'Création de composants réutilisables avec HTML, CSS et JavaScript',
      'Intégration avec divers CMS comme WordPress et Drupal',
      'Participation à des réunions client et estimation de projets',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'PHP'],
  },
];

function ExperienceList() {
  return (
    <div className={styles.experienceList}>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <h3 className={styles.experienceTitle}>{exp.title}</h3>
            <p className={styles.experienceCompany}>{exp.company}</p>
            <p className={styles.experiencePeriod}>{exp.period}</p>
          </div>
          <div className={styles.experienceContent}>
            <ul className={styles.experienceDescription}>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className={styles.experienceTechnologies}>
              <h4>
                <Translate>Technologies</Translate>:
              </h4>
              <div className={styles.techTags}>
                {exp.technologies.map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>
        <Translate>Éducation</Translate>
      </h2>
      <div className={styles.educationItem}>
        <h3 className={styles.educationDegree}>
          <Translate>Master en Informatique</Translate>
        </h3>
        <p className={styles.educationSchool}>Université de Technologie</p>
        <p className={styles.educationPeriod}>2015 - 2017</p>
        <p className={styles.educationDescription}>
          <Translate>
            Spécialisation en développement logiciel et intelligence artificielle. Projet de fin
            d'études sur l'optimisation des applications web pour les appareils mobiles.
          </Translate>
        </p>
      </div>
      <div className={styles.educationItem}>
        <h3 className={styles.educationDegree}>
          <Translate>Licence en Informatique</Translate>
        </h3>
        <p className={styles.educationSchool}>Université des Sciences</p>
        <p className={styles.educationPeriod}>2012 - 2015</p>
        <p className={styles.educationDescription}>
          <Translate>
            Formation fondamentale en programmation, structures de données, algorithmes et
            mathématiques. Participation active dans le club de programmation de l'université.
          </Translate>
        </p>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <div className={styles.certificationsSection}>
      <h2 className={styles.sectionTitle}>
        <Translate>Certifications</Translate>
      </h2>
      <div className={styles.certificationsGrid}>
        <div className={styles.certificationItem}>
          <h3 className={styles.certificationTitle}>AWS Certified Developer</h3>
          <p className={styles.certificationIssuer}>Amazon Web Services</p>
          <p className={styles.certificationDate}>2023</p>
        </div>
        <div className={styles.certificationItem}>
          <h3 className={styles.certificationTitle}>Professional Scrum Master I</h3>
          <p className={styles.certificationIssuer}>Scrum.org</p>
          <p className={styles.certificationDate}>2022</p>
        </div>
        <div className={styles.certificationItem}>
          <h3 className={styles.certificationTitle}>MongoDB Certified Developer</h3>
          <p className={styles.certificationIssuer}>MongoDB University</p>
          <p className={styles.certificationDate}>2021</p>
        </div>
        <div className={styles.certificationItem}>
          <h3 className={styles.certificationTitle}>React Developer Certification</h3>
          <p className={styles.certificationIssuer}>Meta</p>
          <p className={styles.certificationDate}>2020</p>
        </div>
      </div>
    </div>
  );
}

export default function Experience(): JSX.Element {
  return (
    <Layout title="Expérience" description="Mon parcours professionnel et mes compétences">
      <div className="container margin-vert--lg">
        <div className={styles.experienceHeader}>
          <h1 className={styles.pageTitle}>
            <Translate>Expérience Professionnelle</Translate>
          </h1>
          <p className={styles.pageSubtitle}>
            <Translate>Mon parcours professionnel, mes compétences et mes réalisations</Translate>
          </p>
        </div>

        <div className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>
            <Translate>Expérience de Travail</Translate>
          </h2>
          <ExperienceList />
        </div>

        <Education />

        <Certifications />
      </div>
    </Layout>
  );
}
