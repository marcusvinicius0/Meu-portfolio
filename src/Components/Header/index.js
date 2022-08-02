import { useState } from 'react';
import styles from './styles.module.scss';

import { FiX } from 'react-icons/fi';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { IoMdContact } from 'react-icons/io';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <nav className={showMenu ? styles.menuOn : styles.nav}>
                <ul>
                    <li>
                        <AiOutlineHome size={22} />
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <GiMagnifyingGlass size={22} />
                        <a href="#sobremim">Sobre mim</a>
                    </li>
                    <li>
                        <GrProjects size={22} />
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <IoMdContact size={25} />
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>

            <span onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <FiX size={40} color="var(--soft-red)" />
                    :
                    <BiMenuAltRight size={40} color="var(--white)" />
                }
            </span>
        </header>
    )
}