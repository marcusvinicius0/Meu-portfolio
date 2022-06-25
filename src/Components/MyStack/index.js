import styles from './styles.module.scss';

import reactLogo from '../../assets/react.png';
import jsLogo from '../../assets/js.png';
import firebaseLogo from '../../assets/firebase.png';
import sassLogo from '../../assets/sass.png';
import nodeLogo from '../../assets/nodejs.png';
import nextLogo from '../../assets/nextjs.png';
import cssLogo from '../../assets/css3.png';
import htmlLogo from '../../assets/html.png';

export default function MyStack() {
    return (
        <>
            <h1 className={styles.title}>Tenho experiência com:</h1>

            <div className={styles.stackContainer}>

                <div className={styles.boxesContainer}>

                    <div className={styles.reactBox}>
                        <img src={reactLogo} alt="react-logo" width="120" />
                        <h3>React.js</h3>
                        <p>Biblioteca javascript focada em construir interfaces de usuário. Criamos, atualizamos e renderizamos aplicações de forma eficiente e escalável.</p>
                        <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.jsBox}>
                        <img src={jsLogo} alt="js-logo" width="90" />
                        <h3>JavaScript</h3>
                        <p>
                            Linguagem de programação levemente tipada, tendo como seu principal diferencial poder ser utilizada para desenvolvimento web, back-end, aplicativos, desenvolvimento de jogos.. globalmente utilizada.
                        </p>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.firebaseBox}>
                        <img src={firebaseLogo} alt="firebase-logo" width="110" />
                        <h3>Firebase</h3>
                        <p>
                            Firebase é uma plataforma digital onde podemos desenvolver aplicações com recursos de alta performançe e rendimento. Considerado um backend as a service, oferece uma infraestrutura completa voltada para o funcionamento do servidor.
                        </p>
                        <a href="https://firebase.google.com/docs" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.sassBox}>
                        <img src={sassLogo} alt="sass-logo" width="100" />
                        <h3>Sass</h3>
                        <p>
                            Sass é uma extensão do CSS que significa folha de estilo com uma sintaxe incrível. Ela proporciona recursos adicionais como variáveis, seletores aninhados, funções. Tem o objetivo de tornar o desenvolvimento mais simples, eficiente e escalável.
                        </p>
                        <a href="https://sass-lang.com/documentation/" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.nodeBox}>
                        <img src={nodeLogo} alt="node-logo" width="100" />
                        <h3>Node.js</h3>
                        <p>
                            Podemos definir node.js como um ambiente de execução javascript do lado do servidor.
                            Com ele podemos construir aplicações web completas em geral, desde web sites até criações de <a href="https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es" target="_blank" rel="noreferrer">APIs</a> e microserviços.
                        </p>
                        <a className={styles.docLink} href="https://nodejs.org/pt-br/docs/" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.nextBox}>
                        <img src={nextLogo} alt="nextjs-logo" width="200" height="110" />
                        <h3>Next.js</h3>
                        <p>
                            Next.js é um <a href="https://pt.wikipedia.org/wiki/Framework" target="_blank" rel="noreferrer"><strong>
                                framework</strong></a> para React. Com ele podemos fazer uma renderização estática da aplicação e pelo lado do servidor(Server-Side-Rendering). Nossas aplicações React se tornam mais perfomáticas.
                        </p>
                        <a className={styles.nextLink} href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.cssBox}>
                        <img src={cssLogo} alt="css-logo" width="100" />
                        <h3>CSS</h3>
                        <p>
                            CSS é uma linguagem de estilo em cascata. Utilizada para a personalização visual de sites, é mundialmente usada para criar aplicações atrantes, com vida e que trazem uma melhor experiência para os usuários.
                        </p>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                    <div className={styles.htmlBox}>
                        <img src={htmlLogo} alt="html-logo" width="100" />
                        <h3>HTML</h3>
                        <p>HTML é uma linguagem de marcação de hipertexto. Com ele definimos o significado e a estrutura de todo conteúdo exibido na web. Utilizamos tags para separar os elementos e construimos o "esqueleto" das aplicações.</p>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">Ler documentação</a>
                    </div>

                </div>

            </div>
        </>
    )
}