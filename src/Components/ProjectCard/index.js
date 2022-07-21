import styles from './styles.module.scss';


export default function ProjectCard(props) {
    return (
        <div className={styles.projectCard}>
           
            <img className={styles.projectPicture} src={props.img} alt="projeto-print" />
           
            <h5>{props.title}</h5>
            <div className={styles.descriptionBox}>
                <p className={styles.description}>{props.description}</p>
            </div>
            <div className={styles.links}>
                <a href={props.repo} target="_blank" rel="noreferrer">Ver repositório </a>
                <a href={props.link} target="_blank" rel="noreferrer">Ver aplicação</a>
            </div>
        </div>
    )
}