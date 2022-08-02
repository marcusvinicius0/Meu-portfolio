import styles from './styles.module.scss';
import coding from '../../assets/coding.svg';

import resume from '../../assets/marcusbegheli.pdf';

export default function Introduction() {
    return (
        <div>
            <div className={styles.intro}>
                <div className={styles.firstContainer}>
                    <h1>Olá, eu sou o <br /> Marcus!</h1>
                    <p>Desenvolvedor Front-end ▪ React.js</p>
                    <div className={styles.links}>
                        <a href="https://github.com/marcusvinicius0" target="_blank" rel="noreferrer">Acessar GitHub</a>
                        <a href={resume} download>Download CV</a>
                    </div>
                </div>

                <div className={styles.secondContainer}>
                    <img className="manCoding" src={coding} alt="man-coding" />
                </div>
            </div>
        </div>
    )
}