import styles from './styles.module.scss';

export default function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <section>
                <h2 id="sobremim">Um pouco sobre mim:</h2>
                <p>
                    Tenho 22 anos e sou de MG-Brasil. Sou fascinado pela tecnologia e o que ela pode e proporciona pra nossa sociedade em todos os aspectos. Gosto de desenvolver soluções que aprimoram minha lógica e compreensão do projeto como um todo, desde suas configurações até sua implementação.
                    Sou staff de uma comunidade no discord com +600 membros chamada: "It's Time to Code !", onde compartilhamos conhecimento sobre as diferentes áreas da programação, tiramos dúvidas, temos dias marcados para conversações em inglês, realizamos networking e aprendemos juntos.
                </p>

                <h3>Tempo de experiência:</h3>
                <p>Estou na área do desenvolvimento há 07 meses. Desenvolvi projetos como:
                    <strong> <a href="https://github.com/marcusvinicius0/restaurants-system-frontend" target="_blank" rel="noreferrer">Sistema para estabelecimentos de comida</a>,

                        <a href="https://github.com/marcusvinicius0/sistema-de-chamados" target="_blank" rel="noreferrer"> sistema de chamados</a>, <a href="https://github.com/marcusvinicius0/Landing-Page-Jordan" target="_blank" rel="noreferrer">landing pages</a>, <a href="https://github.com/marcusvinicius0/teste-DevSlide" target="_blank" rel="noreferrer">aplicações com foco em consumo de API'S</a>. 

                    </strong>
                </p>
            </section>
        </div>
    )
}
