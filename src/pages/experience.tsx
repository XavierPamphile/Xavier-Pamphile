import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './experience.module.css';

export default function Experience(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Expérience Professionnelle"
      description="Expérience professionnelle et projets de Xavier Pamphile"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Expérience Professionnelle</h1>
          <p className="hero__subtitle">Mon parcours professionnel et mes projets</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.experienceIntro}>
              <p>
                Fort de plusieurs années d'expérience en tant que business developer et chef de
                projet IT combinée à une passion pour l'innovation technologique et une solide
                compréhension des processus métier, je peux piloter efficacement des projets
                digitaux innovants, en alignant les solutions technologiques avec les objectifs
                stratégiques de l'entreprise. Ma capacité à communiquer clairement avec toutes les
                parties prenantes, à résoudre des problèmes et à mener des projets à bien dans les
                délais et budgets impartis, fait de moi un consultant de choix pour vous accompagner
                dans la réalisation de vos projets informatiques.
              </p>
            </div>

            <div className={styles.skillsSection}>
              <h2>Compétences</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h3>Gestion de projet</h3>
                  <p>
                    Recueil et analyse des besoins, Cadrage, Rédaction de cahier des charges
                    (Anglais / Français), Assistance MOA, Planning et budget, Roadmap, Backlog,
                    Pilotage de projets, Gestion des risques et des exigences, Recettes techniques
                    et fonctionnelles, Réunions (COPIL/COPROJ), Encadrement d'équipe, Relation
                    client, Anglais C1
                  </p>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Méthodes</h3>
                  <p>SWOT, Cycle en V, Méthodes agiles (SCRUM - KANBAN)</p>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Langages & frameworks</h3>
                  <p>JavaScript, ReactJS, NodeJS, Python</p>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Outils</h3>
                  <p>
                    JIRA, Trello, GitHub, Slack, Discord, Office 365, Google Suite, Visual Studio,
                    Tableau Software, Power BI, Jupiter Notebook
                  </p>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Base de données</h3>
                  <p>SQL, NoSQL, PhpMyAdmin, MongoDB, PostgreSQL, MySQL, Postman, MCD</p>
                </div>
                <div className={styles.skillCategory}>
                  <h3>Compétences fonctionnelles</h3>
                  <p>
                    Gestion de Bases de Données, Développement fullstack, Data Analysis & BI,
                    Environnement serveur, Réseaux, Cloud, Cybersécurité
                  </p>
                </div>
              </div>
            </div>

            <h2 className={styles.timelineHeader}>Parcours Professionnel</h2>
            <div className={styles.experienceTimeline}>
              <div className={styles.experienceItem}>
                <h2>Business Analyst / AMOA</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Chargeprice</span>
                  <span className={styles.period}>Mai 2024 - Juin 2024</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> Je suis intervenu auprès de la direction en tant que
                  business analyst pour les accompagner dans leur projet de refonte de leur data
                  platform (API) développé en interne.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>Recueil et analyse des problématiques rencontrés par les usagers.</li>
                  <li>
                    Identification précise et formulation des besoins de l'entreprise en matière de
                    Business Intelligence.
                  </li>
                  <li>
                    Conseil sur l'intégration des flux de données, les types de plateformes et
                    outils disponibles sur le marché.
                  </li>
                  <li>
                    Présentation et comparaison des solutions BI les plus adaptés pour répondre aux
                    besoins identifiés : Usages, contraintes techniques et coûts.
                  </li>
                  <li>Conseils dans le choix de la solution.</li>
                  <li>Rédaction des spécifications fonctionnelles. Définition de la roadmap.</li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Développeur Web Full-Stack JavaScript</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>3W Academy</span>
                  <span className={styles.period}>Mars 2024 - Août 2024</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> Formation de développeur web full-stack en Javascript.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>
                    Réalisation d'un site e-commerce full-stack : Cahier des charges, BDD, Front et
                    Back.
                  </li>
                  <li>
                    Préparation à la réalisation d'une application web : Rédaction du cahier des
                    charges.
                  </li>
                  <li>Développement des interfaces frontend de l'application web.</li>
                  <li>
                    Développement du backend de l'application web : Interface administrateur et base
                    de données.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Business Developer</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Artemys</span>
                  <span className={styles.period}>Septembre 2023 - Février 2024</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> En tant que Business developer, j'avais la charge de
                  développer l'activité de la BU Artemys AGIL-IT sur le grand ouest.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>Participation au développement d'Artemys AGIL-IT.</li>
                  <li>Prospection sur le périmètre géographique définit par la direction.</li>
                  <li>
                    Développement de la couverture territoriale grâce à la construction de
                    partenariats.
                  </li>
                  <li>
                    Développement du centre de services grâce à la signature de contrats
                    commerciaux.
                  </li>
                  <li>Gestion des différents rendez-vous avec les prospects et les clients.</li>
                  <li>
                    Rédaction des propositions commerciales, soutenance et signature des contrats.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Chef de Projet / Business Developer</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Mismo</span>
                  <span className={styles.period}>Novembre 2021 - Septembre 2023</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectifs :</strong> En tant que responsable d'agence (Laval), j'avais la
                  charge de la gestion des projets IT et du développement de l'activité commerciale
                  sur le périmètre géographique.
                </p>
                <p>
                  <strong>Responsabilités :</strong>
                </p>
                <ul>
                  <li>
                    <strong>Projets :</strong> recueil et analyse du besoin, cadrage, process AVV,
                    soutenance et négociation.
                  </li>
                  <li>
                    <strong>Contrats :</strong> contractualisation, pilotage et suivi des contrats
                    d'assistance utilisateurs et de maintien en conditions opérationnelles des
                    infrastructures (Comité de pilotage / SLA / Performance).
                  </li>
                  <li>
                    <strong>Pilotage :</strong> planifier, organiser et superviser les différentes
                    étapes des projets informatiques, en veillant au respect des délais, des budgets
                    et des exigences qualité.
                  </li>
                  <li>
                    <strong>Coordination des équipes :</strong> collaborer avec les équipes
                    techniques et fonctionnelles pour assurer une communication fluide et une
                    compréhension commune des objectifs du projet. Encadrement de 2 administrateurs
                    systèmes et réseaux et 2 techniciens et réseaux.
                  </li>
                  <li>
                    <strong>Gestion des ressources :</strong> identifier et allouer les ressources
                    nécessaires, qu'elles soient humaines, matérielles ou financières, pour mener à
                    bien les projets.
                  </li>
                  <li>
                    <strong>Suivi et reporting :</strong> surveiller l'avancement des projets,
                    identifier les risques et proposer des solutions adaptées, tout en tenant
                    informées les parties prenantes de l'état d'avancement.
                  </li>
                  <li>
                    <strong>Assurance qualité :</strong> garantir que les livrables répondent aux
                    standards de qualité définis par la direction et aux attentes des clients.
                  </li>
                </ul>
                <p>
                  <strong>Outils :</strong> l'ensemble du processus commercial et la gestion des
                  projets est assuré par l'outil Athénéo, développé et édité par la société Mismo.
                </p>
                <p>
                  <strong>Réalisations :</strong> environ 1 million d'€ de chiffre d'affaires
                  réalisé pour l'exercice 2022/2023.
                </p>
                <p>
                  <strong>Services :</strong>
                </p>
                <ul>
                  <li>
                    Modernisation d'infrastructures on-premise et cloud : Optimisation des systèmes
                    de backup et de restauration pour assurer la continuité d'activité (PCA/PRA),
                    projets de virtualisation, migration vers des services cloud (hébergement,
                    sauvegarde externalisée).
                  </li>
                  <li>
                    Sécurité des réseaux et cybersécurité : Bornage Wi-Fi, firewalls et mise en
                    place d'outils de protection (Antivirus, EDR, anti-spam).
                  </li>
                  <li>
                    Conduite d'audits de sécurité SI et mise en conformité des infrastructures.
                  </li>
                  <li>
                    Renouvellement de parc informatique : Paramétrage, masterisation et déploiement
                    des PC.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Data Analyst Python</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>OpenClassrooms</span>
                  <span className={styles.period}>Janvier 2020 - Mai 2021</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> Formation de data analyst/BI en Python.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>
                    Collecter, agréger et nettoyer des données en vue de réaliser une étude de
                    marché.
                  </li>
                  <li>
                    Réaliser des modélisations de données pour segmenter une audience marketing.
                  </li>
                  <li>Analyser les ventes en vue d'améliorer la stratégie de l'entreprise.</li>
                  <li>
                    Interroger une base de données statistiques pour répondre à des questions
                    business.
                  </li>
                  <li>
                    Réaliser des dashboards avec graphiques et indicateurs de suivi pour suivre et
                    analyser des résultats.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Commercial</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>News-Media 3.1</span>
                  <span className={styles.period}>Mars 2018 - Décembre 2019</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> En tant que chargé d'affaires, j'étais responsable du
                  développement de l'activité commerciale.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>
                    Prospection et acquisition de nouveaux clients : prise de rendez-vous,
                    élaboration des offres, négociation des contrats auprès des professionnels du
                    juridique et des collectivités territoriales.
                  </li>
                  <li>
                    Gestion du portefeuille clients : suivit de commande, organisation d'événements
                    de mise en relation, mise en œuvre d'un programme de fidélité.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Développeur Web</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Lifactive</span>
                  <span className={styles.period}>Octobre 2017 - Mars 2018</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> Associé de la société Lifactive spécialisé dans la
                  création de sites internet et contenu web.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>Création et évolution de sites de contenu & e-commerce sur WordPress.</li>
                  <li>
                    Mise en œuvre de stratégie de marketing digital : SEO, création de contenu,
                    mailing, landing pages, tunnels de vente.
                  </li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h2>Sales Executive</h2>
                <div className={styles.experienceMeta}>
                  <span className={styles.company}>Browns Shoes (Vancouver, Canada)</span>
                  <span className={styles.period}>Octobre 2015 - Mai 2017</span>
                </div>
                <p className={styles.objective}>
                  <strong>Objectif :</strong> Vendeur dans un environnement anglophone et avec une
                  clientèle internationale.
                </p>
                <p>
                  <strong>Tâches :</strong>
                </p>
                <ul>
                  <li>Vente et conseil dans le prêt-à-porter haut de gamme.</li>
                  <li>Approvisionnement de la surface de vente et gestion des stocks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
