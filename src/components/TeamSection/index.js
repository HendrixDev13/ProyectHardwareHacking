import Heading from '@theme/Heading';
import styles from './styles.module.css';

// TODO: reemplaza estos datos por los reales del equipo y del curso.
const COURSE_INFO = [
  {label: 'Materia', value: 'Aseguramiento de la Calidad de Software (QA)'},
  {label: 'Universidad', value: 'Universidad Mariano Gálvez de Guatemala'},
  {label: 'Docente', value: 'Nombre del docente'},
  {label: 'Periodo', value: 'Semestre 2026'},
];

const TEAM_MEMBERS = [
  {name: 'Integrante 1', role: 'Rol / carnet'},
  {name: 'Integrante 2', role: 'Rol / carnet'},
  {name: 'Integrante 3', role: 'Rol / carnet'},
  {name: 'Integrante 4', role: 'Rol / carnet'},
];

function initials(fullName) {
  return fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.courseCard}>
          <span className={styles.sectionLabel}>Información del curso</span>
          <div className={styles.courseGrid}>
            {COURSE_INFO.map((item) => (
              <div key={item.label} className={styles.courseItem}>
                <span className={styles.courseItemLabel}>{item.label}</span>
                <span className={styles.courseItemValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Heading as="h2" className={styles.teamTitle}>
          Equipo de trabajo
        </Heading>
        <div className="row">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="col col--3">
              <div className={styles.memberCard}>
                <div className={styles.avatar}>{initials(member.name)}</div>
                <p className={styles.memberName}>{member.name}</p>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
