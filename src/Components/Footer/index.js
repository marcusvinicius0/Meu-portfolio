import styles from './styles.module.scss';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h5 id="contato">Entre em contato comigo:</h5>
            <ul>
                <li><a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://wa.me/5534988685919" target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>

            <div>
                <p>@2022 Marcus Vinícius - Front-end developer</p>
                <p>All rights reserved. ®</p>
            </div>

        </footer>
    )
}