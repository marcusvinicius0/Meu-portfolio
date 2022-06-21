import styles from './styles.module.scss';


export default function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <section>
                <h2 id="sobremim">Um pouco sobre mim:</h2>
                <p>
                    Sou fascinado por essa universo da tecnologia. Sempre procuro fazer projetos nos quais além de me fazer gostar do processo de desenvolvimento me faz aprender tecnologias importantes que provaram seus valores.
                    Faço parte de um bootcamp de programação chamado DevClub onde passamos pelo Front-end, aprendendo HTML, CSS, Javascript e React. No Back-end aprendemos node.js, banco postgres e criações de API. Temos nossa comunidade onde trocamos experiência e ajudamos uns aos outros.
                </p>
                <h3>06+</h3><p>meses de experiência em desenvolvimento web. Desenvolvi projetos como: <strong><a href="https://github.com/marcusvinicius0/restaurants-system-frontend" target="_blank">Sistema para restaurantes/pizzarias</a>, <a href="https://github.com/marcusvinicius0/sistema-de-chamados" target="_blank">sistema de chamados</a>, landing pages, formulários...</strong> </p>
            </section>
        </div>
    )
}
