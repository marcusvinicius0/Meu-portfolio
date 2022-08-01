import styles from './styles.module.scss';
import { useState } from 'react';
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

import socialmediaGif from '../../assets/previewsocialdev2.gif';
import callsystemGif from '../../assets/sistemachamados.gif';
import pizzariaGif from '../../assets/sistemas-pizzaria.gif';
import filmariaGif from '../../assets/filmariaproject.gif';

export default function Projects() {
   const [showProjects, setShowProjects] = useState(false);

   let gifs = [callsystemGif, pizzariaGif, socialmediaGif, filmariaGif];

   function handleProjects() {
      setShowProjects(!showProjects);
   }

   return (
      <>
         <div className={styles.titleBox}>
            <h1 className={styles.title} id="projetos">Principais projetos que desenvolvi:</h1>
         </div>

         <div className={styles.projectContainer}>
            <div className={styles.containerCard}>

               <ProjectCard
                  img={gifs[0]}
                  title="SISTEMA DE CHAMADOS"
                  description="Empresas se cadastram e adicionam clientes, podendo agendar uma chamada para reuniões e/ou encontros e visualizando as chamadas através de um dashboard. Além disso também editam seus próprios perfis e o andamento das chamadas, como em aberto, em andamento ou atendida."
                  repo="https://github.com/marcusvinicius0/sistema-de-chamados"
                  link="https://sistema-de-chamados1.netlify.app/"

               />

               <ProjectCardRepo
                  img={gifs[1]}
                  title="SISTEMA PIZZARIA"
                  description="Um sistema para auxiliar estabelecimentos de comida fazendo com que eles salvem, acompanhem e controlem os pedidos que são feitos. Nele, o garçom com o aplicativo abre uma mesa, adicionando os produtos desejados pelos clientes e depois finalizando o pedido. Na aplicação web pode-se acompanhar as mesas abertas e os detalhes de cada pedido, podendo também finalizá-las além de poder cadastrar novas categorias e produtos."
                  repo="https://github.com/marcusvinicius0/restaurants-system-frontend"
               />

               <ProjectCardRepo
                  img={gifs[2]}
                  title="DEV SOCIAL NETWORK"
                  description="Uma rede social   para compartilhar experiências, seguir pessoas, conversar, editar seu próprio perfil, guardar projetos, buscar repositórios no GitHub consumindo uma API e mais... 
                         "
                  repo="https://github.com/marcusvinicius0/Devs-Social-Network"
               />

               <ProjectCard
                  img={gifs[3]}
                  title="FILMARIA"
                  description="Acesse uma lista de renomados filmes, leia suas sinopses, salve seus favoritos e assista ao trailer."
                  repo="https://github.com/marcusvinicius0/projeto-filmaria"
                  link="https://projeto-filmaria-react.netlify.app/"
               />

               {showProjects ? (
                  <div className={styles.finalContent}>
                     <ProjectCardRepo
                        img={pedidoLanches}
                        title="PEDIDO DE LANCHES"
                        description="Registre seu nome, seu lanche, salve e visualize seu histórico de pedidos."
                        repo="https://github.com/marcusvinicius0/Pedido-de-lanches"
                     />,

                     <ProjectCard
                        img={portfolio}
                        title="MEU PORTFÓLIO"
                        description="Desenvolvido a fins de mostrar meus principais projetos."
                        repo="https://github.com/marcusvinicius0/Meu-portfolio"
                        link="https://portfolio-marcusvinicius.netlify.app/"
                     />,

                     <ProjectCard
                        img={dualshockLP}
                        title="DUALSHOCK LANDING PAGE"
                        description="Veja o novo modelo de dualshock do mais novo console playstation 5."
                        repo="https://github.com/marcusvinicius0/playstation-project"
                        link="https://marcusvinicius0.github.io/playstation-project/"
                     />
                  </div>
               ) : ""}
            </div>
            {showProjects ? <button onClick={handleProjects}>Ver menos</button> :
               <button onClick={handleProjects}>Ver mais</button>}
         </div>
      </>
   )
}