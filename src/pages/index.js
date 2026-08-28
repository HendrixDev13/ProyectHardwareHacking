import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import TeamSection from '@site/src/components/TeamSection';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid} />
      <div className={styles.heroAurora} />
      <div className={clsx('container', styles.heroContent)}>
        <span className={styles.eyebrow}>QA · Ciberseguridad · Curso Universitario</span>
        <h1 className={styles.title}>
          <span className={styles.titleStatic}>Hardware</span>
          <span className={styles.glitchWord} data-text="Hacking">
            Hacking
          </span>
        </h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={styles.ctaPrimary} to="/docs/introduccion">
            Empezar el curso →
          </Link>
          <Link
            className={styles.ctaSecondary}
            href="https://github.com/HendrixDev13/ProyectHardwareHacking">
            Ver repositorio
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentación de QA para auditoría de Hardware Hacking y Bluetooth/BLE en Kali Linux y Parrot OS">
      <HomepageHeader />
      <main className={styles.darkMain}>
        <TeamSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
