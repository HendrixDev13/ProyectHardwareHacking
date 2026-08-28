import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    number: '01',
    title: 'Hardware Hacking',
    description:
      'Fundamentos de auditoría de capa física: UART, SPI, I2C y JTAG, con enfoque en su impacto sobre la calidad y seguridad del software embebido.',
  },
  {
    number: '02',
    title: 'Kali Linux vs Parrot OS',
    description:
      'Comparativa de entornos y herramientas (BlueZ, Wireshark, Ubertooth) con guías paralelas para reproducir cada prueba en ambas distribuciones.',
  },
  {
    number: '03',
    title: 'Metodología QA',
    description:
      'Cada vector de ataque documenta alcance, prerrequisitos, pasos de reproducción, evidencia y remediación — no solo el "cómo se ataca".',
  },
];

function Feature({number, title, description}) {
  return (
    <div className="col col--4">
      <div className={styles.card}>
        <span className={styles.cardNumber}>{number}</span>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
