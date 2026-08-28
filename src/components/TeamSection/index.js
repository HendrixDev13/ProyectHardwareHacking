import useBaseUrl from '@docusaurus/useBaseUrl';
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
  {
    name: 'Hendrix Estanely González Mendoza',
    role: 'Desarrollador / 2490-18-20938',
    photo: '/img/noe.jpg',
  },
  {
    name: 'Wendy Fabiola Aj Piox',
    role: 'QA / 2490-21-20938',
    // TODO: coloca el archivo wb.jpg dentro de static/img/ (no en build/) y descomenta:
    // photo: '/img/wb.jpg',
  },
];

function initials(fullName) {
  return fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function MemberAvatar({name, photo}) {
  const resolvedPhoto = useBaseUrl(photo ?? '');
  if (!photo) {
    return <div className={styles.avatar}>{initials(name)}</div>;
  }
  return (
    <img
      className={styles.avatarPhoto}
      src={resolvedPhoto}
      alt={name}
      loading="lazy"
    />
  );
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
                <MemberAvatar name={member.name} photo={member.photo} />
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
