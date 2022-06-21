import styles from './styles.module.scss';

export default function ProjectCardRepo(props){
    return(
        <div className={styles.projectCardRepo}>
            <img src={props.img} alt="projeto-print" />
            <h5>{props.title}</h5>
           <div className={styles.descriptionBox}>
           <p className={styles.description}>{props.description}</p>
           </div>
            <div className={styles.link}>
                <a href={props.repo} target="_blank" rel="noreferrer">Ver repositório</a>
            </div>
        </div>
    )
}