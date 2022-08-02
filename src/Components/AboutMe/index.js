import styles from './styles.module.scss';

export default function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <section>
                <h2 id="sobremim">Um pouco sobre mim:</h2>
                <p>
                    Sou fascinado pelo impacto que a tecnologia causa sobre nossa sociedade em todos os âmbitos. Amo desenvolver aplicações que me desafiam a estar sempre buscando novas soluções, pensando fora da caixa e agregando mais valor ainda para a experiência final do usuário.
                    <br /><br />
                    Sou staff de uma comunidade no discord com +600 membros chamada: "It's Time to Code !", onde compartilhamos conhecimento sobre as diferentes áreas da programação, tiramos dúvidas, temos dias marcados para conversações em inglês, realizamos networking e aprendemos juntos.
                </p>

                <h3>Tempo de experiência:</h3>
                <p>👇 +08 meses de experiência na área de desenvolvimento.  Desenvolvi projetos como:
                    <strong> <a href="https://devsocialnetwork.netlify.app/" target="_blank" rel="noreferrer">Rede social para Desenvolvedores</a>,

                        <a href="https://github.com/marcusvinicius0/restaurants-system-frontend" target="_blank" rel="noreferrer"> Sistema para estabelecimentos de comida</a>, <a href="https://sistema-de-chamados1.netlify.app/dashboard" target="_blank" rel="noreferrer">sistema de chamados</a>, <a href="https://github.com/marcusvinicius0/teste-DevSlide" target="_blank" rel="noreferrer">aplicações com foco em consumo de API'S</a>.

                    </strong>
                </p>
            </section>
        </div>
    )
}
