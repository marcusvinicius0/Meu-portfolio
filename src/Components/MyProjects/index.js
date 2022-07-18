import styles from './styles.module.scss';

import ProjectCard from '../ProjectCard';
import ProjectCardRepo from '../ProjectCardsRepo';

import sistemaChamados from '../../assets/sistemachamados.png';
import sistemaRestaurante from '../../assets/sistemarestaurante.png';
import devSocial from '../../assets/socialmedia.png';
import filmaria from '../../assets/filmaria.png';
import portfolio from '../../assets/portfolio.svg';
import jordanLP from '../../assets/jordanlandingpg.png';
import pedidoLanches from '../../assets/pedidolanches.png';
import dualshockLP from '../../assets/dualshock.png';

export default function Projects() {

    return (
        <>
            <div className={styles.titleBox}>
                <h1 className={styles.title} id="projetos">Principais projetos que desenvolvi:</h1>
            </div>

            <div className={styles.projectContainer}>
                <div className={styles.containerCard}>

                    <ProjectCard
                        img={sistemaChamados}
                        title="SISTEMA DE CHAMADOS"
                        description="Cadastre empresas, crie e edite chamados para reuniões e tarefas."
                        repo="https://github.com/marcusvinicius0/sistema-de-chamados"
                        link="https://sistema-de-chamados1.netlify.app/"

                    />

                    <ProjectCardRepo
                        img={sistemaRestaurante}
                        title="SISTEMA PIZZARIA"
                        description="Abra uma mesa, adicione categorias e produtos para pedidos feitos em seu estabelecimento."
                        repo="https://github.com/marcusvinicius0/restaurants-system-frontend"
                    />

                    <ProjectCardRepo
                        img={devSocial}
                        title="DEV SOCIAL NETWORK"
                        description="Crie seu perfil, encontre amigos, arquive projetos e compartilhe suas ideias nessa rede social de desenvolvedores."
                        repo="https://github.com/marcusvinicius0/Devs-Social-Network"
                    />

                    <ProjectCard
                        img={filmaria}
                        title="FILMARIA"
                        description="Acesse uma lista de renomados filmes, leia suas sinopses, salve seus favoritos e assista ao trailer."
                        repo="https://github.com/marcusvinicius0/projeto-filmaria"
                        link="https://projeto-filmaria-react.netlify.app/"
                    />

                    <ProjectCard
                        img={portfolio}
                        title="MEU PORTFÓLIO"
                        description="Desenvolvido a fins de mostrar meus principais projetos."
                        repo=""
                        link=""
                    />

                    <ProjectCard
                        img={jordanLP}
                        title="JORDAN LANDING PAGE"
                        description="Veja as novidades da linha Jordan e escolha o que combina com você."
                        repo="https://github.com/marcusvinicius0/Landing-Page-Jordan"
                        link="https://marcusvinicius0.github.io/Landing-Page-Jordan/"
                    />

                    <ProjectCardRepo
                        img={pedidoLanches}
                        title="PEDIDO DE LANCHES"
                        description="Registre seu nome, seu lanche, salve e visualize seu histórico de pedidos."
                        repo="https://github.com/marcusvinicius0/Pedido-de-lanches"
                    />

                    <ProjectCard
                        img={dualshockLP}
                        title="DUALSHOCK LANDING PAGE"
                        description="Veja o novo modelo de dualshock do mais novo console playstation 5."
                        repo="https://github.com/marcusvinicius0/playstation-project"
                        link="https://marcusvinicius0.github.io/playstation-project/"
                    />
                </div>
            </div>
        </>
    )
}